import { useEffect } from "react";

export const useWindowWidthLogger = () => {
    useEffect(() => {
        const handleResize = () => {
            console.log(`Largura da tela: ${window.innerWidth}px`);
        };

        window.addEventListener("resize", handleResize);

        // Chama a função uma vez para registrar o valor inicial
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
}
