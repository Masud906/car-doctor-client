import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-one-tan.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="text-center">
            <h3 className="text-4xl text-orange-600 font-bold">Our Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati qui animi magni eveniet possimus sapiente atump.<br/> Aspernatur incidunt nihil molestias dolorem animi, possimus nobis adipisci, ab odit est facilis vel?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;