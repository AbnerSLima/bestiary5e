import './Header.css'

export function Header(props) {
  return (
    <header className='header bg-4'>
      <img src="./icon_bestiary.png" alt="logotipo do site" className='logoHeader'/>
      <h1 className='color-5'>Bestiário 5e</h1>
    </header>
  )
}