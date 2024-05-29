export default Header;

const Header = () => {
    return (
        <header>
            <div>
                <img src="/logo.png" alt="Logo"/>
            </div>

            <div>
                <button>Adicionar novo produto</button>
                <img src="/icone.png" alt="Icone"/>
            </div>
            <p>Acompanhe nossos lançamentos incríveis</p>
        </header>
    );
};