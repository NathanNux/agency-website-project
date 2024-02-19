import { useContext } from 'react'
import  GlobalStateContext  from './GlobalStateContext'

export const useGlobalState = () => {
    const globalState = useContext(GlobalStateContext)
    return globalState
}

export const getScrollFunctionForSectionId = (sectionId: string) => {
    switch (sectionId) {
        case 'websiteDesign':
            return scrollToWebsiteDesign
        case 'graphicDesign':
            return scrollToGraphicDesign
        case 'shopifyStores':
            return scrollToShopifyStores
        case 'brands':
            return scrollToBrands
        default:
            return () => {}
    }
}

const scrollToWebsiteDesign = () => {
    const element = document.getElementById('websiteDesign')
    element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToGraphicDesign = () => {
    const element = document.getElementById('graphicDesign')
    element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToShopifyStores = () => {
    const element = document.getElementById('shopifyStores')
    element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToBrands = () => {
    const element = document.getElementById('brands')
    element?.scrollIntoView({ behavior: 'smooth' })
}