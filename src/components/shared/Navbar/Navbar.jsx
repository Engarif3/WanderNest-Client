import Container from "../../Container";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-30 shadow-md">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex justify-between items-center gap-4 md:gap-0">
                     <Logo></Logo>  
                     <div>Search</div>   
                     <div>Menu</div>   
                    </div>
                </Container>
            </div>
            
        </div>
    );
};

export default Navbar;