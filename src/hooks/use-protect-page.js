import { useEffect } from "react"
import { goToLoginPage } from "../routes"


export const useProtectPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem("cookenu.token")
        if(!token) {
            goToLoginPage(navigate)
        }
      }, [navigate])
}