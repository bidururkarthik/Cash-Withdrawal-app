// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  changeMoneyFivety = value => {
    const {amount} = this.state

    this.setState(each => ({amount: each.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="cardcontainer">
          <div className="userprofilecontainer">
            <div className="UserIconcontainer">
              <p className="yourbalance">s</p>
            </div>
            <p className="username">Saraha Williams</p>
          </div>

          <div className="moneydetailscontainer">
            <p className="yourbalance">Your Balance</p>
            <div>
              <p className="Amountheading">{amount}</p>
              <p className="yourbalance">In Rupess</p>
            </div>
          </div>

          <p className="Amountheading">Withdraw</p>
          <p className="yourbalance">CHOOSE SUM (IN RUPEES)</p>

          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                changeMoneyFivety={this.changeMoneyFivety}
                denominationDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
