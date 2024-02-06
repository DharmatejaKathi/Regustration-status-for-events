// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistration} = props

  const initialText = () => (
    <p className="initial-content">
      Click on an event, to view its Registration Details
    </p>
  )

  const yetToRegisterPage = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-paragraph">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registrations-closed-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosedNow = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="yet-paragraph">
        Stay tuned! We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderResult = () => {
    switch (activeEventRegistration) {
      case registrationStatus.yetToRegister:
        return yetToRegisterPage()
      case registrationStatus.registered:
        return registered()
      case registrationStatus.registrationsClosed:
        return registrationsClosedNow()
      default:
        return initialText()
    }
  }

  return <div className="registration-container">{renderResult()}</div>
}

export default ActiveEventRegistrationDetails
