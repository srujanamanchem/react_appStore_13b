import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const selectTab = () => {
    onClickTab(tabId)
  }
  const activeClassName = isActive ? 'tab-name active' : 'tab-name'
  return (
    <li className="category-tab">
      <button className={activeClassName} type="button" onClick={selectTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
