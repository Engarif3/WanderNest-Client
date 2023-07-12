import Container from "../../Container";
import DropdownMenu from "./DropdownMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";


const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-30 shadow-md">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex justify-between items-center gap-4 md:gap-0">
                     <Logo></Logo>  
                     <SearchBar></SearchBar>  
                     <DropdownMenu></DropdownMenu>
                    </div>
                </Container>
            </div>
            
        </div>
    );
};

export default Navbar;