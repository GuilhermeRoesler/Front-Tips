import { useEffect } from 'react'

export const useBlurLoad = () => {
    useEffect(() => {
        const blurLoads = document.querySelectorAll(".blur-load")
        
        blurLoads.forEach(div => {
            const img = div.querySelector("img")

            const loaded = () => {
                div.classList.add("loaded")
            }

            img.addEventListener("error", () => console.warn("Image failed to load"))

            if (img.complete) {
                loaded()
            } else {
                img.addEventListener("load", loaded)
            }
        })

        // Cleanup
        return () => {
            blurLoads.forEach(div => {
                const img = div.querySelector("img")
                img.removeEventListener("load", () => div.classList.add("loaded"))
                img.removeEventListener("error", () => console.warn("Image failed to load"))
            })
        }
    }, [])
}
