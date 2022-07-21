import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="category-app">
      <img src={imageUrl} className="app-image" alt={appName} />
      <br />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
