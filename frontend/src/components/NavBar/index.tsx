import githubIcon from '../../assets/img/github 1.svg'
import './styles.css'
const Navbar = () => {
  return (
    <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <a href="google.com">
              <div className='dsmovie-contact-container'>
              <img src={githubIcon} alt="GitHub Icon" />
              <p className='dsmovie-contact-link'>/devsuperior</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
  )
}

export default Navbar