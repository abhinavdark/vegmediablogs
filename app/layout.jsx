import 'style/global.css';
import Nav from 'components/Nav';
import { Analytics } from '@vercel/analytics/react';

export const metadata ={
    title:"Vegamedia",
    description:"A Blog for realestate,yatchers,winery",
    keywords :"digital marketing, digital marketing agency, digital marketing, real estate luxury, jet charter marketing india, online advertising, SEo optimizationyatch networking mission missionsails cruisesrentals trips luxury packages campaigns solbenef fans hashtags scripts ping listing hotel weekend catering services amen,digital marketing salary, what is digital marketing, is digital marketing, digital marketing company, digital marketing jobs, digital marketing services, digital marketing course, power digital marketing, digital marketing strategy, digital marketing certificate, freelance digital marketing,vegamedia,Vegamedia,VegaMedia",


}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              <Nav/>
               {children}
               <Analytics />
                </main>
                
        </body>
        </html>
  )
}

export default RootLayout;
