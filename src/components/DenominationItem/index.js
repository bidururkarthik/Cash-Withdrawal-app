// Write your code here
import './index.css'

const DenominationItem = props => {
  const {changeMoneyFivety, denominationDetails} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    changeMoneyFivety(value)
  }

  return (
    <li className="firstbuttoncontainer">
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
