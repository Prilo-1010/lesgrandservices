import '../styles/Contact.css'
import { Button } from '../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const client = { name, email, message }

    const response = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setName('')
      setMessage('')
      setEmail('')
      setError(null)
      setEmptyFields(json.emptyFields)
      navigate('/')
    }
  }
  useEffect(()=>{
    setLoading(false)
  })
  return (
    <>
      {loading ? 
            <div className='btext'><h2>Loading..</h2></div> :
      
      (<div className="contact">
        <div className="contact-container">
          <div className='ctext'>
            <h1>Contact Us.</h1>
            <p>Got any Questions? Feel free to ask or visit our FAQ page </p>
          </div>
          <div className="container-contact">
            <div className="wrap-contact">
              <form className="contact-form validate-form" onSubmit={handleSubmit}>
                <div className="wrap-input validate-input">
                  <input className='input' type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="wrap-input validate-input" >
                  <input className='input' type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='wrap-input validate-input'>
                  <textarea className='input' type="text" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className="container-contact-form-btn">
                  {error && <div className='error'>{error}</div>}
                  <div className='btn-con'>
                    <Button
                      buttonStyle='btn-other'
                      buttonSize='btn-medium'
                    >
                      Send
                    </Button>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="item1 left-align"><i className="fa fa-lg fa-map-marker-alt"></i> Coming bientot</div>
                  <div className="item4 right-align"><i className="fa fa-lg fa-phone"></i> (123) 456-7890</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Contact