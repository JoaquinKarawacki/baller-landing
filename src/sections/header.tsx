export default function Header() {
    return (
        <header className="header"> 
            <div className="container header__inner">
                <a href = "#" className="brand">Baller</a>

                <nav className="nav">
                <a href = "#como" className="nav__link">Cómo funciona</a>
                <a href = "#demos" className="nav__link">Demos</a>
                <a href = "#web" className="nav__link">Web a medida</a>
                <a
                 className="btn btn--primary"
                 href="https://wa.me/59894402339?text=Hola%20quiero%20agendar%20una%20demo%20de%2015%20min.%20Mi%20%40IG%20es%20%40mi_tienda.%20Horarios%20que%20me%20sirven:%20Lun%2015-18%2C%20Mar%209-12."
                 target="_blank" rel="noopener noreferrer"
                 >
                Consultar
                </a>

            </nav> 
        </div>
    </header>
    );
}