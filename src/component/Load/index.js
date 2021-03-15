import React, { useState, useEffect } from 'react'

// Animation
import { motion } from 'framer-motion'

// Helpers
import { SvgVariantLogo, PathVariantLogo, SvgVariantText } from '../helpers/animation'

import './index.css'


const Load = () => {
    const [ fadeOut, setFadeOut ] = useState('')
    
    useEffect( () => {
        if (fadeOut.length === 0) {
            setTimeout(() => {
                setFadeOut("fade")
                setTimeout(() => {
                    setFadeOut("fade none")
                }, 500);
            }, 5000);
        }
    })

    return (
        <div className={`bg-pri ${fadeOut}`}>
            <motion.svg width="157" height="173" viewBox="0 0 157 173" fill="none" xmlns="http://www.w3.org/2000/svg" variants={SvgVariantLogo} initial="hidden" animate="show" className="svgLogo">
                <motion.path variants={PathVariantLogo}  d="M49.6 150.8C44 150.8 38.4 150.133 32.8 148.8C27.2 147.467 22.1333 145.333 17.6 142.4C13.2 139.467 9.53333 135.733 6.6 131.2C3.8 126.533 2.4 121 2.4 114.6C2.4 108.867 3.4 103.733 5.4 99.2C7.4 94.6667 9.86667 90.6 12.8 87C15.8667 83.4 19.1333 80.3333 22.6 77.8C26.2 75.2667 29.5333 73.1333 32.6 71.4C35.6667 69.6667 38.2667 68.4 40.4 67.6C42.6667 66.6667 44 66.1333 44.4 66C44.2667 66 43.5333 65.6667 42.2 65C40.8667 64.2 39.4 63.0667 37.8 61.6C36.2 60 34.6667 58 33.2 55.6C31.7333 53.2 30.7333 50.2667 30.2 46.8C20.0667 45.8667 12.4667 43.8667 7.4 40.8C2.46667 37.7333 1.41561e-07 33.8 1.41561e-07 29C1.41561e-07 25.6667 0.933333 22.4 2.8 19.2C4.8 16 7.13333 13.1333 9.8 10.6C12.4667 8.06666 15.1333 5.99999 17.8 4.4C20.6 2.79999 22.7333 1.99999 24.2 1.99999C24.8667 1.99999 25.3333 2.19999 25.6 2.6C25.8667 2.99999 26 3.39999 26 3.79999C26 4.46666 25.4 5.66666 24.2 7.4C23 8.99999 22.4 11 22.4 13.4C22.4 16.6 23.3333 19.6 25.2 22.4C27.0667 25.0667 29.6667 27.4667 33 29.6C35.1333 25.4667 38.1333 21.6 42 18C46 14.4 50.4 11.2667 55.2 8.59999C60.1333 5.93333 65.3333 3.86666 70.8 2.39999C76.2667 0.933324 81.6 0.199993 86.8 0.199993C90.4 0.199993 93.7333 0.666661 96.8 1.6C100 2.4 102.733 3.59999 105 5.19999C107.4 6.66666 109.267 8.53333 110.6 10.8C111.933 12.9333 112.6 15.3333 112.6 18C112.6 21.4667 111.267 24.8 108.6 28C105.933 31.2 102.067 34.1333 97 36.8C92.0667 39.3333 86.0667 41.5333 79 43.4C71.9333 45.1333 64 46.2667 55.2 46.8C55.3333 49.0667 55.6 51.1333 56 53C56.5333 54.7333 57.1333 56.2667 57.8 57.6C58.4667 59.0667 59.2 60.4667 60 61.8C61.0667 61.6667 62.3333 61.4667 63.8 61.2C65 61.0667 66.4 60.9333 68 60.8C69.7333 60.6667 71.6667 60.6 73.8 60.6C81.6667 60.6 85.6 62.9333 85.6 67.6C85.6 69.6 84.4 71.6667 82 73.8C79.7333 75.8 76.6667 76.8 72.8 76.8C70.4 76.8 68.2 76.6667 66.2 76.4C64.2 76 62.4667 75.5333 61 75C59.4 74.4667 57.9333 73.8 56.6 73C51.6667 75.9333 47.2667 79.4 43.4 83.4C40.0667 86.8667 37 91.1333 34.2 96.2C31.5333 101.267 30.2 107.2 30.2 114C30.2 122.4 32.4667 128.667 37 132.8C41.5333 136.8 48 138.8 56.4 138.8C63.6 138.8 70.4 136.8 76.8 132.8C83.2 128.8 88.6667 123.333 93.2 116.4C93.3333 116 93.6667 115.533 94.2 115C94.4667 114.733 94.8667 114.467 95.4 114.2C95.9333 113.8 96.5333 113.6 97.2 113.6C98.4 113.6 99.4 114 100.2 114.8C101 115.6 101.4 116.533 101.4 117.6C101.4 118.267 101.133 119.267 100.6 120.6C100.333 121.133 100.067 121.667 99.8 122.2C97.6667 125.8 95 129.333 91.8 132.8C88.6 136.133 84.8667 139.133 80.6 141.8C76.4667 144.467 71.8 146.6 66.6 148.2C61.4 149.933 55.7333 150.8 49.6 150.8ZM86.2 8.79999C83.1333 8.79999 80.0667 9.46666 77 10.8C73.9333 12.1333 71.0667 14 68.4 16.4C65.7333 18.6667 63.3333 21.4667 61.2 24.8C59.0667 28 57.4667 31.5333 56.4 35.4C62.1333 35.4 67.4 34.9333 72.2 34C77.1333 33.0667 81.4 31.7333 85 30C88.6 28.2667 91.4 26.2 93.4 23.8C95.4 21.4 96.4 18.7333 96.4 15.8C96.4 13.6667 95.4 12 93.4 10.8C91.4 9.46666 89 8.79999 86.2 8.79999Z" fill="#1E1E1E"/>
                <motion.path variants={PathVariantLogo} d="M154.4 148.4C150.933 153.067 147 157.2 142.6 160.8C138.733 163.867 134 166.667 128.4 169.2C122.933 171.733 116.6 173 109.4 173C105.133 173 100.8 172.467 96.4 171.4C92.1333 170.333 88.2667 168.6 84.8 166.2C81.3333 163.8 78.5333 160.667 76.4 156.8C74.2667 152.933 73.2 148.2 73.2 142.6C73.2 135.933 74.5333 129.6 77.2 123.6C80 117.467 83.5333 112.133 87.8 107.6C92.2 103.067 97.0667 99.4667 102.4 96.8C107.733 94.1333 112.933 92.8 118 92.8C121.6 92.8 124.8 93.4 127.6 94.6C130.4 95.6667 132.733 97.1333 134.6 99C136.6 100.867 138.133 103 139.2 105.4C140.267 107.667 140.8 109.933 140.8 112.2C140.8 113.933 140.4 115.733 139.6 117.6C138.933 119.333 138 120.933 136.8 122.4C135.6 123.867 134.267 125.067 132.8 126C131.467 126.933 130.133 127.4 128.8 127.4C126.133 127.4 123.733 126.6 121.6 125C119.6 123.267 118.6 121.267 118.6 119C118.6 117.267 119 115.867 119.8 114.8C120.6 113.733 121.467 112.8 122.4 112C123.467 111.067 124.4 110.267 125.2 109.6C126.133 108.8 126.6 107.867 126.6 106.8C126.6 105.733 126 104.8 124.8 104C123.733 103.067 122.4 102.6 120.8 102.6C117.867 102.6 115 103.733 112.2 106C109.533 108.133 107.133 111 105 114.6C102.867 118.2 101.133 122.267 99.8 126.8C98.4667 131.2 97.8 135.667 97.8 140.2C97.8 147.133 99.6667 152.267 103.4 155.6C107.267 158.933 112 160.6 117.6 160.6C122.133 160.6 126.267 159.667 130 157.8C133.733 155.933 136.933 153.867 139.6 151.6C142.8 148.933 145.6 145.867 148 142.4C148.267 142 148.667 141.533 149.2 141C149.6 140.733 150.067 140.467 150.6 140.2C151.133 139.8 151.733 139.6 152.4 139.6C153.6 139.6 154.6 140 155.4 140.8C156.2 141.6 156.6 142.533 156.6 143.6C156.6 144.133 156.467 144.667 156.2 145.2C155.933 145.6 155.667 146.067 155.4 146.6C155 147.133 154.667 147.733 154.4 148.4Z" fill="#1e1e1e"/>
            </motion.svg>
            <motion.svg width="513" height="179" viewBox="0 0 513 179" fill="none" xmlns="http://www.w3.org/2000/svg" className="textLogo" variants={SvgVariantText} initial="hidden" animate="show">
                <path d="M42 76H0.0078125V5.98047H40.3887V18.8223H15.7793V34.3984H38.6797V47.1914H15.7793V63.207H42V76Z" fill="#1E1E1E"/>
                <path d="M44.4453 74.6816V62.1816C46.9844 63.7116 49.5072 64.8509 52.0137 65.5996C54.5527 66.3483 56.9453 66.7227 59.1914 66.7227C61.9258 66.7227 64.0742 66.3483 65.6367 65.5996C67.2318 64.8509 68.0293 63.7116 68.0293 62.1816C68.0293 61.2051 67.6712 60.3913 66.9551 59.7402C66.2389 59.0892 65.3112 58.5195 64.1719 58.0312C63.0651 57.543 61.8444 57.1035 60.5098 56.7129C59.1751 56.3223 57.8893 55.8828 56.6523 55.3945C54.6667 54.6458 52.9089 53.8483 51.3789 53.002C49.8815 52.123 48.612 51.1139 47.5703 49.9746C46.5612 48.8353 45.7799 47.5169 45.2266 46.0195C44.7057 44.5221 44.4453 42.748 44.4453 40.6973C44.4453 37.8978 45.0475 35.4889 46.252 33.4707C47.4889 31.4525 49.1165 29.8086 51.1348 28.5391C53.1855 27.237 55.513 26.293 58.1172 25.707C60.7539 25.0885 63.4883 24.7793 66.3203 24.7793C68.5339 24.7793 70.7799 24.9583 73.0586 25.3164C75.3372 25.6419 77.5833 26.1302 79.7969 26.7812V38.6953C77.8438 37.556 75.7441 36.7096 73.498 36.1562C71.2845 35.5703 69.1035 35.2773 66.9551 35.2773C65.946 35.2773 64.9857 35.375 64.0742 35.5703C63.1953 35.7331 62.4141 35.9935 61.7305 36.3516C61.0469 36.6771 60.5098 37.1165 60.1191 37.6699C59.7285 38.1908 59.5332 38.793 59.5332 39.4766C59.5332 40.388 59.8262 41.1693 60.4121 41.8203C60.998 42.4714 61.763 43.041 62.707 43.5293C63.651 43.985 64.6927 44.4082 65.832 44.7988C67.0039 45.1569 68.1595 45.5312 69.2988 45.9219C71.3496 46.638 73.2051 47.4193 74.8652 48.2656C76.5254 49.112 77.9414 50.1048 79.1133 51.2441C80.3177 52.3835 81.2292 53.7181 81.8477 55.248C82.4987 56.778 82.8242 58.6009 82.8242 60.7168C82.8242 63.679 82.1732 66.2181 80.8711 68.334C79.6016 70.4173 77.8926 72.1263 75.7441 73.4609C73.6283 74.763 71.1706 75.707 68.3711 76.293C65.6042 76.9115 62.7233 77.2207 59.7285 77.2207C54.2272 77.2207 49.1328 76.3743 44.4453 74.6816Z" fill="#1E1E1E"/>
                <path d="M117.984 75.4141C115.706 76.6185 112.271 77.2207 107.682 77.2207C96.8092 77.2207 91.373 71.5729 91.373 60.2773V37.377H83.2676V26H91.373V15.209L106.754 10.8145V26H117.984V37.377H106.754V57.5918C106.754 62.8001 108.821 65.4043 112.955 65.4043C114.583 65.4043 116.259 64.9323 117.984 63.9883V75.4141Z" fill="#1E1E1E"/>
                <path d="M167.646 55.3945H135.029C135.55 62.6536 140.124 66.2832 148.75 66.2832C154.251 66.2832 159.085 64.9811 163.252 62.377V73.5098C158.63 75.9837 152.624 77.2207 145.234 77.2207C137.161 77.2207 130.895 74.9909 126.436 70.5312C121.976 66.0391 119.746 59.7891 119.746 51.7812C119.746 43.4805 122.155 36.9049 126.973 32.0547C131.79 27.2044 137.715 24.7793 144.746 24.7793C152.038 24.7793 157.669 26.944 161.641 31.2734C165.645 35.6029 167.646 41.4785 167.646 48.9004V55.3945ZM153.34 45.9219C153.34 38.7604 150.443 35.1797 144.648 35.1797C142.174 35.1797 140.026 36.2051 138.203 38.2559C136.413 40.3066 135.322 42.862 134.932 45.9219H153.34Z" fill="#1E1E1E"/>
                <path d="M205.443 13.793C203.458 13.0117 201.553 12.6211 199.73 12.6211C194.783 12.6211 192.309 15.3066 192.309 20.6777V26H203.734V37.377H192.309V76H176.928V37.377H168.529V26H176.928V19.7988C176.928 14.1022 178.783 9.51237 182.494 6.0293C186.205 2.54622 191.251 0.804688 197.631 0.804688C200.756 0.804688 203.36 1.13021 205.443 1.78125V13.793Z" fill="#1E1E1E"/>
                <path d="M248.807 76H234.207V68.8223H234.012C230.659 74.4212 225.695 77.2207 219.119 77.2207C214.269 77.2207 210.444 75.8535 207.645 73.1191C204.878 70.3522 203.494 66.6738 203.494 62.084C203.494 52.3835 209.24 46.7845 220.73 45.2871L234.305 43.4805C234.305 38.0117 231.342 35.2773 225.418 35.2773C219.461 35.2773 213.797 37.0514 208.426 40.5996V28.9785C210.574 27.8717 213.504 26.8952 217.215 26.0488C220.958 25.2025 224.36 24.7793 227.42 24.7793C241.678 24.7793 248.807 31.8919 248.807 46.1172V76ZM234.305 55.6875V52.3184L225.223 53.4902C220.21 54.1413 217.703 56.4036 217.703 60.2773C217.703 62.0352 218.305 63.4837 219.51 64.623C220.747 65.7298 222.407 66.2832 224.49 66.2832C227.387 66.2832 229.747 65.2904 231.57 63.3047C233.393 61.2865 234.305 58.7474 234.305 55.6875Z" fill="#1E1E1E"/>
                <path d="M305.305 76H289.924V48.2168C289.924 40.4694 287.157 36.5957 281.623 36.5957C278.954 36.5957 276.757 37.6211 275.031 39.6719C273.306 41.7227 272.443 44.3268 272.443 47.4844V76H257.014V26H272.443V33.9102H272.639C276.317 27.8229 281.672 24.7793 288.703 24.7793C299.771 24.7793 305.305 31.6478 305.305 45.3848V76Z" fill="#1E1E1E"/>
                <path d="M337.389 77.2207C329.055 77.2207 322.496 74.8932 317.711 70.2383C312.958 65.5508 310.582 59.2031 310.582 51.1953C310.582 42.9271 313.056 36.4655 318.004 31.8105C322.952 27.123 329.641 24.7793 338.072 24.7793C346.373 24.7793 352.883 27.123 357.604 31.8105C362.324 36.4655 364.684 42.6341 364.684 50.3164C364.684 58.6172 362.242 65.1764 357.359 69.9941C352.509 74.8118 345.852 77.2207 337.389 77.2207ZM337.779 36.5957C334.133 36.5957 331.301 37.849 329.283 40.3555C327.265 42.862 326.256 46.4102 326.256 51C326.256 60.6029 330.13 65.4043 337.877 65.4043C345.266 65.4043 348.961 60.4727 348.961 50.6094C348.961 41.2669 345.234 36.5957 337.779 36.5957Z" fill="#1E1E1E"/>
                <path d="M250.203 174.51C245.092 176.984 238.419 178.221 230.184 178.221C219.441 178.221 210.994 175.063 204.842 168.748C198.689 162.433 195.613 154.018 195.613 143.504C195.613 132.306 199.064 123.224 205.965 116.258C212.898 109.292 221.883 105.809 232.918 105.809C239.754 105.809 245.516 106.671 250.203 108.396V123.582C245.516 120.783 240.177 119.383 234.188 119.383C227.612 119.383 222.306 121.45 218.27 125.584C214.233 129.718 212.215 135.317 212.215 142.381C212.215 149.152 214.119 154.555 217.928 158.592C221.736 162.596 226.863 164.598 233.309 164.598C239.461 164.598 245.092 163.1 250.203 160.105V174.51Z" fill="#1E1E1E"/>
                <path d="M304.895 177H289.514V148.582C289.514 141.258 286.844 137.596 281.506 137.596C278.771 137.596 276.558 138.621 274.865 140.672C273.173 142.723 272.326 145.327 272.326 148.484V177H256.896V102.977H272.326V134.422H272.521C276.298 128.66 281.424 125.779 287.902 125.779C299.23 125.779 304.895 132.615 304.895 146.287V177Z" fill="#1E1E1E"/>
                <path d="M354.752 177H340.152V169.822H339.957C336.604 175.421 331.64 178.221 325.064 178.221C320.214 178.221 316.389 176.854 313.59 174.119C310.823 171.352 309.439 167.674 309.439 163.084C309.439 153.383 315.185 147.785 326.676 146.287L340.25 144.48C340.25 139.012 337.288 136.277 331.363 136.277C325.406 136.277 319.742 138.051 314.371 141.6V129.979C316.52 128.872 319.449 127.895 323.16 127.049C326.904 126.202 330.305 125.779 333.365 125.779C347.623 125.779 354.752 132.892 354.752 147.117V177ZM340.25 156.688V153.318L331.168 154.49C326.155 155.141 323.648 157.404 323.648 161.277C323.648 163.035 324.251 164.484 325.455 165.623C326.692 166.73 328.352 167.283 330.436 167.283C333.333 167.283 335.693 166.29 337.516 164.305C339.339 162.286 340.25 159.747 340.25 156.688Z" fill="#1E1E1E"/>
                <path d="M400.85 175.193C397.367 177.212 392.337 178.221 385.762 178.221C378.079 178.221 371.862 175.893 367.109 171.238C362.357 166.583 359.98 160.577 359.98 153.221C359.98 144.725 362.52 138.035 367.598 133.152C372.708 128.237 379.528 125.779 388.057 125.779C393.949 125.779 398.213 126.561 400.85 128.123V141.209C397.627 138.8 394.03 137.596 390.059 137.596C385.632 137.596 382.116 138.898 379.512 141.502C376.94 144.074 375.654 147.638 375.654 152.195C375.654 156.622 376.891 160.105 379.365 162.645C381.839 165.151 385.241 166.404 389.57 166.404C393.411 166.404 397.171 165.2 400.85 162.791V175.193Z" fill="#1E1E1E"/>
                <path d="M430.834 178.221C422.501 178.221 415.941 175.893 411.156 171.238C406.404 166.551 404.027 160.203 404.027 152.195C404.027 143.927 406.501 137.465 411.449 132.811C416.397 128.123 423.087 125.779 431.518 125.779C439.818 125.779 446.329 128.123 451.049 132.811C455.769 137.465 458.129 143.634 458.129 151.316C458.129 159.617 455.688 166.176 450.805 170.994C445.954 175.812 439.298 178.221 430.834 178.221ZM431.225 137.596C427.579 137.596 424.747 138.849 422.729 141.355C420.71 143.862 419.701 147.41 419.701 152C419.701 161.603 423.575 166.404 431.322 166.404C438.712 166.404 442.406 161.473 442.406 151.609C442.406 142.267 438.679 137.596 431.225 137.596ZM447.777 103.318L432.494 119.09H421.361L434.057 103.318H447.777Z" fill="#1E1E1E"/>
                <path d="M512.43 177H497.049V149.217C497.049 141.469 494.282 137.596 488.748 137.596C486.079 137.596 483.882 138.621 482.156 140.672C480.431 142.723 479.568 145.327 479.568 148.484V177H464.139V127H479.568V134.91H479.764C483.442 128.823 488.797 125.779 495.828 125.779C506.896 125.779 512.43 132.648 512.43 146.385V177Z" fill="#1E1E1E"/>
                <path d="M257 69H272.5V135H257V69Z" fill="#1E1E1E"/>
            </motion.svg>
        </div>
    )
}

export default Load