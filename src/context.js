import React, { Component } from 'react';
import items from './data';


const PhoneContext = React.createContext();


class PhoneProvider extends Component {
    state = {
        phones: [],
        sortedPhones: [],
        detailPhone: [],
        company: 'all',
        memory: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        basket: [],
        modalOpen: false,
        modalPhone: [],
        basketTotal: 0,
    }

    handleFilterChange = event => {
        const target = event.target
        const name = event.target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        }, this.filterPhones)

    }

    componentDidMount() {
        let phones = items;
        let maxPrice = Math.max(...phones.map(item => item.price));

        this.setPhones()
        this.setState({
            price: maxPrice,
            maxPrice,
        })

    }

    setPhones = () => {
        let tempPhones = [];
        items.forEach(item => {
            const singleItem = { ...item };
            tempPhones = [...tempPhones, singleItem];
        })
        this.setState(() => {
            return { phones: tempPhones, sortedPhones: tempPhones }
        })
    }

    getItem = id => {
        const phones = this.state.phones.find(phone => phone.id === id);
        return phones;
    }

    handleDetail = id => {
        const phone = this.getItem(id);
        this.setState(() => {
            return { detailPhone: phone }
        })
    }

    filterPhones = () => {
        let { phones, company, price, memory } = this.state
        let tempPhones = [...phones];

        if (company !== 'all') {
            tempPhones = tempPhones.filter(phone => phone.company === company);
        }
        if (memory !== 'all') {
            tempPhones = tempPhones.filter(phone => phone.memory === memory)
        }
        tempPhones = tempPhones.filter(phone => phone.price <= price);

        this.setState({
            sortedPhones: tempPhones
        })
    }



    addToBasket = id => {
        let tempPhones = [...this.state.phones];
        const index = tempPhones.indexOf(this.getItem(id));
        const phone = tempPhones[index];
        phone.inBasket = true;
        phone.count = 1;
        const price = phone.price;
        phone.total = price;
        this.setState(() => {
            return { phones: tempPhones, basket: [...this.state.basket, phone] };
        }, () => {
            this.addTotals();
        })
    }

    openModal = id => {
        const phone = this.getItem(id);
        this.setState(() => {
            return { modalPhone: phone, modalOpen: true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false, }
        })
    };
    decrement = id => {
        let tempBasket = [...this.state.basket];
        const selectedPhone = tempBasket.find(item => item.id === id);
        const index = tempBasket.indexOf(selectedPhone);
        const phone = tempBasket[index];
        phone.count = phone.count - 1;
        if (phone.count === 0) {
            this.removePhone(id)
        } else {
            phone.total = phone.count * phone.price
            this.setState(() => {
                return {
                    cart: [...tempBasket]
                }
            }, () => {
                this.addTotals()
            })
        }
    }
    increment = id => {
        let tempBasket = [...this.state.basket];
        const selectedPhones = tempBasket.find(item => item.id === id);
        const index = tempBasket.indexOf(selectedPhones);
        const phone = tempBasket[index];
        phone.count = phone.count + 1;
        phone.total = phone.count * phone.price
        this.setState(() => {
            return {
                basket: [...tempBasket]
            }
        }, () => {
            this.addTotals()
        })
    }
    removePhone = id => {
        let tempPhones = [...this.state.phones];
        let tempBasket = [...this.state.basket];
        tempBasket = tempBasket.filter(item => item.id !== id);
        const index = tempPhones.indexOf(this.getItem(id));
        let removedPhones = tempPhones[index];
        removedPhones.inBasket = false;
        removedPhones.count = 0;
        removedPhones.total = 0;
        this.setState(() => {
            return {
                basket: [...tempBasket],
                phones: [...tempPhones],
            }
        }, () => {
            this.addTotals();
        })
    };
    clearBasket = () => {
        this.setState(() => {
            return {
                basket: [],
            }
        }, () => {
            this.setPhones();
            this.addTotals();
        })
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.basket.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(() => {
            return {
                basketTotal: total
            }
        })
    }
    render() {
        return (
            <PhoneContext.Provider value={{
                ...this.state,
                handleFilterChange: this.handleFilterChange,
                handleDetail: this.handleDetail,
                addToBasket: this.addToBasket,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleExtras: this.handleExtras,
                decrement: this.decrement,
                increment: this.increment,
                removePhone: this.removePhone,
                clearBasket: this.clearBasket,
            }}>
                {this.props.children}
            </PhoneContext.Provider>
        )
    }
}

const PhoneConsumer = PhoneContext.Consumer;

export function withPhoneConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <PhoneConsumer>
            {value => <Component{...props} context={value} />}
        </PhoneConsumer>
    }
}

export { PhoneProvider, PhoneConsumer, PhoneContext };



