import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/popup/router'
import './popup.styl'

export default function Popup() {
    return <RouterProvider router={globalRouters} />
}