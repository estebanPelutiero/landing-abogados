import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from "react-scroll";
import Layout from './Layout';

const Hero = () => {
  return (
    <div className="lg:bg-[url('./assets/images/about.jpg')] bg-[url('./assets/images/about.jpg')] bg-cover bg-no-repeat bg-center z-[-1] h-[100vh]">
      <div className="overflow-x-hidden absolute z-0 w-full h-[100vh] backdrop-brightness-[.5]"></div>
      <Layout id={'nosotros'} className="relative z-10 flex items-center">
          <div className="w-full md:w-[60%] lg:w-[60%]">
            <div className="mb-6">
              <h1 className="text-cream text-7xl md:text-8xl font-semibold font-serif">
                Rosana <br /> <span className="text-blue">Abonjo</span>
              </h1>
            </div>

            <div className='w-full lg:w-[70%]'>
              <p className="text-cream text-base lg:text-lg mb-10">
                Somos un estudio jurídico comprometido profesional y humanamente con el servicio satisfactorio a los clientes, realizando un seguimiento personalizado para cada caso
              </p>
              <Link
              smooth={true}
              to="servicios"
              offset={-100}
              duration={1300}>
                <Button className="text-base font-poppins capitalize font-medium tracking-wider text-cream bg-blue px-7 py-2 lg:py-[10px] rounded-lg shadow-lg">
                  <Link
                    smooth={true}
                    spy={true}
                    to="clases"
                    duration={1300}>
                    Ver servicios
                  </Link>
                </Button>
              </Link>
            </div>
          </div>
      </Layout>
    </div>
  )
}

export default Hero