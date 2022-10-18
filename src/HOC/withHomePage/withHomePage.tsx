import axios from 'axios'
import { useState, useRef } from 'react'
import OurWorkBottomArticles from '../../Components/OurWorkComponents/OurWorkBottomArticles'
import OurWorkImg1 from '../../Imgs/OurWork/1.jpg'
import OurWorkImg2 from '../../Imgs/OurWork/2.jpg'
import OurWorkImg3 from '../../Imgs/OurWork/3.jpg'
import OurWorkImg4 from '../../Imgs/OurWork/4.jpg'
import OurWorkImg5 from '../../Imgs/OurWork/5.jpg'
import OurWorkImg6 from '../../Imgs/OurWork/6.jpg'
import OurWorkImg7 from '../../Imgs/OurWork/7.jpg'
import OurWorkImg8 from '../../Imgs/OurWork/8.jpg'
import OurWorkImg9 from '../../Imgs/OurWork/9.jpg'
import OurWorkImg10 from '../../Imgs/OurWork/10.jpg'
import OurWorkImg11 from '../../Imgs/OurWork/11.jpg'
import OurWorkImg12 from '../../Imgs/OurWork/12.jpg'
import OurWorkImg13 from '../../Imgs/OurWork/13.jpg'
import OurWorkImg14 from '../../Imgs/OurWork/14.jpg'
import OurWorkImg15 from '../../Imgs/OurWork/15.jpg'

export default function withHomePage(Component: any) {
    return function () {
        const PreventDefault = (e: any) => e.preventDefault()
    

        // Benefits block
        const [active, setActive] = useState(1)
        const costStandard = active === 1 ? '1 150 руб/м' : active === 2 ? '1 000 руб/м' : '800 руб/м'
        const costPremium = active === 1 ? '1 200 руб/м' : active === 2 ? '1 050 руб/м' : '900 руб/м'
        const costLuxury = active === 1 ? '1 350 руб/м' : active === 2 ? '1 100 руб/м' : '950 руб/м'
        const costFull = active === 1 ? '1 550 руб/м' : active === 2 ? '1 300 руб/м' : '1 050 руб/м'
        const benefitsCost = [
            costStandard,
            costPremium,
            costLuxury,
            costFull
        ]


        // Where are installed block
        const [numOfActive, setNumActive] = useState(1)


        // How we work block
        const [activeCircle, setActiveCircle] = useState(1)

        const howWeWorkTextArr = [
            [
                'Оставляете заявку:',
                `Мы успешно работаем в этой сфере по сей день,
                благодаря наличию надежно устоявшегося принципа – производить
                тщательный отбор специалистов на любую должность в компании.
                Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.`
            ],
            [
                'Замер объекта:',
                `Мы успешно работаем в этой сфере по сей день,
                благодаря наличию надежно устоявшегося принципа – производить
                тщательный отбор специалистов на любую должность в компании.
                Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.`
            ],
            [
                'Производим:',
                `Мы успешно работаем в этой сфере по сей день,
                благодаря наличию надежно устоявшегося принципа – производить
                тщательный отбор специалистов на любую должность в компании.
                Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.`
            ],
            [
                'Доставка и монтаж:',
                `Мы успешно работаем в этой сфере по сей день,
                благодаря наличию надежно устоявшегося принципа – производить
                тщательный отбор специалистов на любую должность в компании.
                Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.`
            ],
            [
                'Результат:',
                `Мы успешно работаем в этой сфере по сей день,
                благодаря наличию надежно устоявшегося принципа – производить
                тщательный отбор специалистов на любую должность в компании.
                Мы ручаемся за наших сотрудников, они выполняют работу в срок и должным образом.`
            ]
        ]

        const HowWeWorkHeading = howWeWorkTextArr[activeCircle - 1][0]

        const HowWeWorkText = howWeWorkTextArr[activeCircle - 1][1]

        const moveBack = (n: number, func: any) => {
            func((prev: number) => prev > 1 ? prev - 1 : prev = 5 )
        }
        const moveForward = (n: number, func: any) => {
            func((prev: number) => prev < 5 ? prev + 1 : prev = 1 )
        }


        // Our work block
        const [activeWork, setActiveWork] = useState(1)
        const ourWorkArr: Array<number | any> = [
            activeWork,
            setActiveWork
        ]

        const moveBackOurWork = (n: number, func: any) => {
            func( n > 1 ? n - 1 : n = 5 )
        }
        const moveForwardOurWork = (n: number, func: any) => {
            func( n < 5 ? n + 1 : n = 1 )
        }
        const ourWorkFunc: Array<any> = [
            moveBackOurWork,
            moveForwardOurWork
        ]

        const currentArticles = []
        if (ourWorkArr[0] === 1) {
            let article1 = <OurWorkBottomArticles image={OurWorkImg1} text={'Мягкие окна для беседки в Серпузовском районе'} link={'/'} />
            let article2 = <OurWorkBottomArticles image={OurWorkImg2} text={'Мягкие окна для беседки в Жуковском'} link={'/'}  />
            let article3 = <OurWorkBottomArticles image={OurWorkImg3} text={'Мягкие окна для беседки в Химках'} link={'/'}  />
            currentArticles.push(article1)
            currentArticles.push(article2)
            currentArticles.push(article3)
        } else if (ourWorkArr[0] === 2) {
            let article1 = <OurWorkBottomArticles image={OurWorkImg4} text={'Мягкие окна для беседки в Серпузовском районе'} link={'/'} />
            let article2 = <OurWorkBottomArticles image={OurWorkImg5} text={'Мягкие окна для беседки в Жуковском'} link={'/'}  />
            let article3 = <OurWorkBottomArticles image={OurWorkImg6} text={'Мягкие окна для беседки в Химках'} link={'/'}  />
            currentArticles.push(article1)
            currentArticles.push(article2)
            currentArticles.push(article3)
        } else if (ourWorkArr[0] === 3) {
            let article1 = <OurWorkBottomArticles image={OurWorkImg7} text={'Мягкие окна для беседки в Серпузовском районе'} link={'/'} />
            let article2 = <OurWorkBottomArticles image={OurWorkImg8} text={'Мягкие окна для беседки в Жуковском'} link={'/'}  />
            let article3 = <OurWorkBottomArticles image={OurWorkImg9} text={'Мягкие окна для беседки в Химках'} link={'/'}  />
            currentArticles.push(article1)
            currentArticles.push(article2)
            currentArticles.push(article3)
        } else if (ourWorkArr[0] === 4) {
            let article1 = <OurWorkBottomArticles image={OurWorkImg10} text={'Мягкие окна для беседки в Серпузовском районе'} link={'/'} />
            let article2 = <OurWorkBottomArticles image={OurWorkImg11} text={'Мягкие окна для беседки в Жуковском'} link={'/'}  />
            let article3 = <OurWorkBottomArticles image={OurWorkImg12} text={'Мягкие окна для беседки в Химках'} link={'/'}  />
            currentArticles.push(article1)
            currentArticles.push(article2)
            currentArticles.push(article3)
        } else if (ourWorkArr[0] === 5) {
            let article1 = <OurWorkBottomArticles image={OurWorkImg13} text={'Мягкие окна для беседки в Серпузовском районе'} link={'/'} />
            let article2 = <OurWorkBottomArticles image={OurWorkImg14} text={'Мягкие окна для беседки в Жуковском'} link={'/'}  />
            let article3 = <OurWorkBottomArticles image={OurWorkImg15} text={'Мягкие окна для беседки в Химках'} link={'/'}  />
            currentArticles.push(article1)
            currentArticles.push(article2)
            currentArticles.push(article3)
        }


        // Reviews block
        const [reviewsArr, setReviewsArr] = useState([])
        const [currentShowedReviews, setCurrentShowedReviews] = useState(0)

        const getReview = async() => {
            return axios({ method: 'GET', url: 'reviews.json'})
                .then(response => setReviewsArr(response.data.reviews))
                .catch(error => console.error(error))
        }
        if(reviewsArr[0] === undefined) {
            getReview()
        }


        // Console output
        // console.log(reviewsArr.length)
        // Need to delete after

        const reviewsBack = () => {
            currentShowedReviews > 0
            ? setCurrentShowedReviews(currentShowedReviews - 1)
            : currentShowedReviews === 0 && reviewsArr[0] !== undefined
            ? setCurrentShowedReviews(reviewsArr.length - 1)
            : console.log('reviewsBackError')
        }
        const reviewsForward = () => {
            if (reviewsArr[0] !== undefined) {
                currentShowedReviews < reviewsArr.length - 1
                ? setCurrentShowedReviews(currentShowedReviews + 1)
                : currentShowedReviews === reviewsArr.length - 1 && reviewsArr[0] !== undefined
                ? setCurrentShowedReviews(0)
                : console.log('reviewsForwardError')
            }
        }

        const reviewsCurrentArr: Array<Array<Object> | number | any> = [
            reviewsArr,
            currentShowedReviews,
            reviewsBack,
            reviewsForward,
            setCurrentShowedReviews
        ]


        // Bottom form block
        const inputName: any = useRef()
        const inputEmail: any = useRef()
        const inputTel: any = useRef()
        const inputAboutProject: any = useRef()
        const checkBox: any = useRef()
        const refsArr: Array<any> = [inputName, inputEmail, inputTel, inputAboutProject, checkBox]

        const postFormData = async (e: any) => {
            e.preventDefault()
            type formDataObject = {
                name: string,
                email: string,
                tel: string,
                aboutProject: string
            }
            if (
                checkBox.current.checked === true && inputName.current.value !== null && inputName.current.value !== '' && inputName.current.value !== undefined
                && inputEmail.current.value !== null && inputEmail.current.value !== '' && inputEmail.current.value !== undefined
                && inputTel.current.value !== null && inputTel.current.value !== '' && inputTel.current.value !== undefined
                && inputAboutProject.current.value !== null && inputAboutProject.current.value !== '' && inputAboutProject.current.value !== undefined
            ) {
                const formData: formDataObject = {
                    name: inputName.current.value,
                    email: inputEmail.current.value,
                    tel: inputTel.current.value,
                    aboutProject: inputAboutProject.current.value
                }
                await axios.post('http://localhost:3000/formData', formData)
                    .then(
                        response => {
                            console.log(response)
                            alert('Данные успешно отправлены!')
                        }
                    )
                    .catch(
                        error => {
                            alert(`При отправке произошла ошибка: ${error}`)
                        }
                    )
            } else if ( checkBox.current.checked !== true ) {
                alert('Вы не согласились на обработку ваших данных')
            } else {
                alert('Вы не заполнили данные')
            }
        }


        return (
            <Component
                PreventDefault={PreventDefault}
                active={active}
                setActive={setActive}
                numOfActive={numOfActive}
                setNumActive={setNumActive}
                activeCircle={activeCircle}
                setActiveCircle={setActiveCircle}
                howWeWorkTextArr={howWeWorkTextArr}
                HowWeWorkText={HowWeWorkText}
                HowWeWorkHeading={HowWeWorkHeading}
                moveBack={moveBack}
                moveForward={moveForward}
                benefitsCost={benefitsCost}
                ourWorkArr={ourWorkArr}
                ourWorkFunc={ourWorkFunc}
                articles={currentArticles}
                reviewsCurrentArr={reviewsCurrentArr}
                postFormData={postFormData}
                refsArr={refsArr}
            />
        )
    }
}