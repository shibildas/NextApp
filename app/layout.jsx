import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'
export const metadata={
    title:"Promtopia",
    description:"Discover & share AI prompts"
}
const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
            <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
            {children}
            </main>
        </body>

    </html>
  )
}

export default Rootlayout