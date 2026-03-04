import { SiFlask, SiMysql } from "react-icons/si"
import finanzasImg from "../assets/Finanzas.png"
import marcaje1 from "../assets/marcaje.png"
import marcaje2 from "../assets/marcaje2.png"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaPython } from "react-icons/fa"
import "./Trabajos.css"

export default function Trabajos(){
    
    const works = [
        {
            id: 1,
            nombre: "SudFinanzas",
            desc: 'Aplicación web desarrollada para la empresa SudCap durante mi período de práctica profesional. Su función principal es la gestión y control de activos, junto con el registro y seguimiento del flujo monetario de la empresa.',
            img: [finanzasImg],
            tec: ["flask", "python", "html", "css", "javascript", "mysql"]
        },
        {
            id: 2,
            nombre: "SudMarcaje",
            desc: "Aplicación web desarrollada para la empresa SudCap durante mi período de práctica profesional. Permite iniciar y gestionar un contador para registrar las horas de trabajo de los empleados, además de obtener su ubicación en tiempo real y visualizarla en un mapa accesible únicamente para administradores.",
            img: [marcaje1,marcaje2],
            tec: ["flask", "python", "html", "css", "javascript", "mysql"]
        }
    ]

    const tecIconos = {
        flask: <SiFlask />,
        python: <FaPython />,
        html: <FaHtml5 />,
        css: <FaCss3Alt />,
        javascript: <FaJsSquare/>,
        mysql: <SiMysql />
    }
    
    return (
        <section className="container_trabajos">
            {works.map(work => (
                <div className="trabajo" key={work.id}>
                    <h1>{work.nombre}</h1>
                    <p>{work.desc}</p>
                    {work.img.map((imagen, index) => (
                        <img key={index} src={imagen} alt={work.nombre} />
                    ))}
                    <div className="tec-icons">
                        {work.tec.map((tec, index) => (
                            <span key={index}>
                            {tecIconos[tec]}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}