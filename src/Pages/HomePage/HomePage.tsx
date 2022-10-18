import React from 'react'
import withHomePage from '../../HOC/withHomePage/withHomePage'
import Button from '../../Components/Button/Button'
import CostChoiceBtn from '../../Components/CostChoiceBtn/CostChoiceBtn'
import WhereAreInstalledBtn from '../../Components/WhereAreInstalledBtn/WhereAreInstalledBtn'
import InstalledActiveLineDiv from '../../Components/InstalledActiveLineDiv/InstalledActiveLineDiv'
import InstalledWhiteBlockText from '../../Components/InstalledWhiteBlockText/InstalledWhiteBlockText'
import BackgroundImgDiv from '../../Components/BackgroundImgDiv/BackgroundImgDiv'
import CircleFlexContainer from '../../Components/HowWeWorkCircles/CircleFlexContainer'
import CirclesDashedLine from '../../Components/HowWeWorkCircles/CirclesDashedLine'
import HowWeWorkCircle from '../../Components/HowWeWorkCircles/Circle'
import HowWeWorkBottomDots from '../../Components/HowWeWorkCircles/BottomDots'
import CardImg1 from '../../Imgs/BenefitsCards/lifetime.svg'
import CardImg2 from '../../Imgs/BenefitsCards/mounting.svg'
import CardImg3 from '../../Imgs/BenefitsCards/speed.svg'
import CardImg4 from '../../Imgs/BenefitsCards/star.svg'
import CardImg5 from '../../Imgs/BenefitsCards/rectangle.svg'
import CardImg6 from '../../Imgs/BenefitsCards/thumbsup.svg'
import MountingImage from '../../Imgs/HomePage/MountingBlock/MountingImage.jpg'
import MosquitoNet from '../../Imgs/HomePage/OurMaterials/MosquitoNet.jpg'
import Carabine1 from '../../Imgs/HomePage/OurMaterials/Carabine1.jpg'
import Carabine2 from '../../Imgs/HomePage/OurMaterials/Carabine2.jpg'
import HowWeWorkBottomImage from '../../Components/HowWeWorkCircles/HowWeWorkBottomImage'
import HowWeWorkBackgroundNum from '../../Components/HowWeWorkCircles/BackgroundNum'
import OurWorkBtn from '../../Components/OurWorkComponents/OurWorkBtn'
import OurWorkMobileBtn from '../../Components/OurWorkComponents/OurWorkMobileBtn'
import OurWorkMobileBtnAll from '../../Components/OurWorkComponents/OurWorkMobileBtnAll'
import Review from '../../Components/Reviews/Review'
import ReviewsBottomDots from '../../Components/Reviews/ReviewsBottomDots'
import BeneftisBlockCostMobile from '../../Components/BenefitsBlockCostMobile/BenefitsBlockCostMobile'
import WhereAreInstalledTextMobile from '../../Components/WhereAreInstalledTextMobile/WhereAreInstalledTextMobile'


// styles import
import { TopBackgroundImageDiv, HomePageWrappedTopHeader, HomePageWrappedTopHeaderSpan,
    HomePageTopHeaderWrappedUl, HomePageBuySoftWindowsBlock,
    WrappedBuySoftWindowsBlockHeading, WrappedBuySoftWindowsBlockParagraph, WrappedCardsFlexDiv,
    WrappedCardDiv, WrappedCardFirstHeading, WrappedCardSecondHeading, WrappedUlCard,
    WrappedThirdBlockDiv, WrappedThirdBlockParagraph, WrappedThirdBlockSpan, WrappedThirdBlockInput, WrappedThirdBlockForm,
    BenefitsBlockHeadingTop, BenefitsBlockFlexDiv, BenefitsBlockCard, BenefitsBlockCardImg,
    BenefitsBlockCardHeading, BenefitsBlockCardText, BenefitsBlockCostChoice, BenefitsBlockCostWhiteLine,
    BenefitsBlockCostDarkLine, BenefitsBlockDiv, BenefitsBlockCostHeading, WorkerBlockDiv,
    WorkerBlockHeading, WorkerBlockParapgraphDiv, WhereAreInstalledDiv, WhereAreInstalledHeading,
    WhereAreInstalledFlex, InstalledColumnFlex, InstalledWhiteBlockTextDiv, InstalledLineDiv, WhereAreInstalledUnderBtnDiv,
    MountingBlockDiv, MountingBlockHeading, MountingBlockTextDiv, MountingBlockText, MountingBottomLink,
    OurMaterialBlockDiv, OurMaterialHeading, OurMaterialFlexDiv, OurMaterialUnderImgText,
    OurMaterialUnderImgLink, HowWeWorkBlockDiv, HowWeWorkBlockHeading, CirclesFlexDiv, HowWeWorkBottomFlexDiv,
    ArrowLeft, ArrowRight, HowWeWorkTextDiv, HowWeWorkTextHeading, HowWeWorkTextParagraph, HowWeWorkBottomDotsFlexDiv,
    OurWorkBlockDiv, OurWorkHeading, OurWorkTextFlexDiv, OurWorkBottomFlexDiv, OurWorkArrowLeft, OurWorkArrowRight,
    ReviewsBlockDiv, ReviewsBlockHeading, ReviewsBottomFlexDiv, ReviewsArrowLeft, ReviewsArrowRight,
    ReviewsDotsFlexDiv, ReviewBlockBottomText, ReviewsBottomTextLeftDiv, ReviewsBottomTextRightDiv,
    ReviewBlockBottomTextFlexDiv, WrappedReviewBottomTextUl, FormBlockDiv, FormBlockHeading, FormBlockParagraph, WrappedForm,
    FormBlockLeftDiv, WrappedLabel, WrappedInput, WrappedCheckboxLabel, } from './HomePageStyle'

const HomePage: React.FC<{
    PreventDefault: any,
    active: number,
    setActive: any,
    numOfActive: number,
    setNumActive: any,
    activeCircle: number,
    setActiveCircle: any,
    howWeWorkTextArr: Array<Array<string | string>>,
    HowWeWorkHeading: string,
    HowWeWorkText: string,
    moveBack: any,
    moveForward: any,
    benefitsCost: Array<string>,
    ourWorkArr: Array<number | any>,
    ourWorkFunc: Array<any>,
    articles: Array<React.ReactNode>,
    reviewsCurrentArr: Array<Array<Object> | number | any>,
    currentShowedReviews: number,
    postFormData: any,
    refsArr: Array<any>,
}> = ({PreventDefault, active, setActive, numOfActive, setNumActive, benefitsCost, activeCircle, setActiveCircle,
    howWeWorkTextArr, HowWeWorkHeading, HowWeWorkText, moveBack, moveForward, ourWorkArr, ourWorkFunc, articles,
    reviewsCurrentArr, postFormData, refsArr }) => {

    return (
        <>
            {/* Top block */}
            <TopBackgroundImageDiv>
                <HomePageWrappedTopHeader>
                    Мягкие окна<br/> под ключ<br/>
                    <HomePageWrappedTopHeaderSpan>
                        от 1550 руб/м<sup>2</sup>
                    </HomePageWrappedTopHeaderSpan>
                    <HomePageTopHeaderWrappedUl>
                        <li><span>Производим монтаж в течении 1 дня</span></li>
                        <li><span>Срок производства рассчитывается<br/></span><span>индивидуально для каждого заказчика</span></li>
                    </HomePageTopHeaderWrappedUl>
                    <Button btnType={'HomeTop'}>
                        Рассчитать стоимость
                    </Button>
                </HomePageWrappedTopHeader>
            </TopBackgroundImageDiv>

            {/* Buy soft windows block */}
            <HomePageBuySoftWindowsBlock>
                <div>
                    <WrappedBuySoftWindowsBlockHeading>
                        Купить мягкие окна
                    </WrappedBuySoftWindowsBlockHeading>
                    <WrappedBuySoftWindowsBlockParagraph>
                        Мягкие окна ПВХ - это отличная альтернатива классическому остеклению.
                        Простота монтажа, долговечность, недорогая стоимость мягких окон…
                        У нас можно купить шторы из гибкого ПВХ недорого и без ущерба качеству.
                    </WrappedBuySoftWindowsBlockParagraph>
                </div>
                <WrappedCardsFlexDiv>
                    <WrappedCardDiv>
                            <div>
                                <WrappedCardFirstHeading>Стандарт</WrappedCardFirstHeading>
                                <WrappedCardSecondHeading>от 1 100 руб/м<sup>2</sup></WrappedCardSecondHeading>
                                <WrappedUlCard>
                                    <li>Пленка Китай 700 мкм до -20 C&deg;</li>
                                    <li>Окантовка ОКСФОРД Премиум</li>
                                    <li>Комплект креплений через каждые 40 см</li>
                                </WrappedUlCard>
                            </div>
                            <Button btnType={'HomeSoftWindows'}>
                                Оформить заказ
                            </Button>
                    </WrappedCardDiv>
                    <WrappedCardDiv>
                        <div>
                            <WrappedCardFirstHeading>Премиум</WrappedCardFirstHeading>
                            <WrappedCardSecondHeading>от 1 150 руб/м<sup>2</sup></WrappedCardSecondHeading>
                            <WrappedUlCard>
                                <li>Пленка Ю. Корея 700 мкм до -40 C&deg;</li>
                                <li>Окантовка тканью ОКСФОРД Премиум или ПВХ (выбор из цветов по каталогу)</li>
                                <li>Комплект креплений через каждые 40 см</li>
                            </WrappedUlCard>
                        </div>
                        <Button btnType={'HomeSoftWindows'}>
                            Оформить заказ
                        </Button>
                    </WrappedCardDiv>
                    <WrappedCardDiv>
                        <div>
                            <WrappedCardFirstHeading>Под ключ</WrappedCardFirstHeading>
                            <WrappedCardSecondHeading>от 1 550 руб/м<sup>2</sup></WrappedCardSecondHeading>
                            <WrappedUlCard>
                                <li>
                                    В комплектации «Стандарт» включая замер, доставку и монтаж
                                    при заказе более 20 м<sup>2</sup> и установке в деревянное плоское основание
                                </li>
                            </WrappedUlCard>
                        </div>
                        <Button btnType={'HomeSoftWindows'}>
                            Оформить заказ
                        </Button>
                    </WrappedCardDiv>
                </WrappedCardsFlexDiv>
            </HomePageBuySoftWindowsBlock>

            {/* Third - form block */}
            <WrappedThirdBlockDiv>
                <div>
                    <WrappedThirdBlockParagraph>
                        Не можете определиться с выбором?
                        <WrappedThirdBlockSpan>
                            Оставьте заявку и мы свяжемся с Вами в ближайшее время
                        </WrappedThirdBlockSpan>
                    </WrappedThirdBlockParagraph>
                    <WrappedThirdBlockForm onSubmit={PreventDefault}>
                        <WrappedThirdBlockInput placeholder={'Ваш номер телефона'} />
                        <Button btnType={'ThirdBlockForm'}>
                            Отправить заявку
                        </Button>
                    </WrappedThirdBlockForm>
                </div>
            </WrappedThirdBlockDiv>

            {/* Benefits block */}
            <BenefitsBlockDiv>
            <div>
                <BenefitsBlockHeadingTop>
                    Наши преимущества
                </BenefitsBlockHeadingTop>
                <BenefitsBlockFlexDiv>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg1}/>
                        <BenefitsBlockCardHeading>
                            Большой срок службы
                        </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Срок службы составляет 10 лет,
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            при соблюдении правил
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            эксплуатации.
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg2}/>
                        <BenefitsBlockCardHeading>
                            Простой монтаж
                        </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Мы проведём инструктаж по установке,
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            если хотите выполнить монтаж
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            самостоятельно.
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg3}/>
                        <BenefitsBlockCardHeading>
                            Очень быстро
                        </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Мы работаем 24/7, поэтому ваш заказ
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            будет выполнен и смонтирован
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            кратчайшие сроки!
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                </BenefitsBlockFlexDiv>
                <BenefitsBlockFlexDiv>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg4}/>
                        <BenefitsBlockCardHeading>
                            Лучшие пленки
                            </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Мы не экономим на ваших окнах и
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            и используем только лучшие всепогодные
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            пленки!
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg5}/>
                        <BenefitsBlockCardHeading>
                            Любые варианты окантовки
                        </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Немецкая ткань ПВХ в десяти
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            расцветках («Стандарт»). С нами
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            надёжно и практично!
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                    <BenefitsBlockCard>
                        <BenefitsBlockCardImg src={CardImg6}/>
                        <BenefitsBlockCardHeading>
                            Прочные москитные сетки
                        </BenefitsBlockCardHeading>
                        <BenefitsBlockCardText>
                            Мы используем только прочнейшие
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            москитные сетки, выдерживающие очень
                        </BenefitsBlockCardText>
                        <BenefitsBlockCardText>
                            большие нагрузки.
                        </BenefitsBlockCardText>
                    </BenefitsBlockCard>
                </BenefitsBlockFlexDiv>
                <BenefitsBlockCostHeading>
                    Стоимость мягких окон
                </BenefitsBlockCostHeading>
                    <BenefitsBlockCostChoice>
                        <CostChoiceBtn
                            active={active}
                            setActive={setActive}
                            btnNum={1}
                        >
                            <p><span>Мягкие окна более 50 м<sup>2</sup></span><span/></p>
                            <BeneftisBlockCostMobile
                                benefitsCost={benefitsCost}
                                benefitsTextNum={1}
                                active={active}
                            />
                        </CostChoiceBtn>
                        <CostChoiceBtn
                            active={active}
                            setActive={setActive}
                            btnNum={2}
                        >
                            <p><span>Мягкие окна от 15 м<sup>2</sup> до 50 м<sup>2</sup></span><span/></p>
                            <BeneftisBlockCostMobile
                                benefitsCost={benefitsCost}
                                benefitsTextNum={2}
                                active={active}
                            />
                        </CostChoiceBtn>
                        <CostChoiceBtn
                            active={active}
                            setActive={setActive}
                            btnNum={3}
                        >
                            <p><span>Мягкие окна до 15 м<sup>2</sup></span><span/></p>
                            <BeneftisBlockCostMobile
                                benefitsCost={benefitsCost}
                                benefitsTextNum={3}
                                active={active}
                            />
                        </CostChoiceBtn>
                    </BenefitsBlockCostChoice>
                    <BenefitsBlockCostWhiteLine>
                        <span>Стандарт</span>
                        <span style={{fontWeight: 400}}>
                            {benefitsCost[0]}
                            <sup>2</sup>
                        </span>
                    </BenefitsBlockCostWhiteLine>
                    <BenefitsBlockCostDarkLine>
                        <span>Премимум</span>
                        <span style={{fontWeight: 400}}>
                            {benefitsCost[1]}
                            <sup>2</sup>
                        </span>
                    </BenefitsBlockCostDarkLine>
                    <BenefitsBlockCostWhiteLine>
                        <span>Люкс</span>
                        <span style={{fontWeight: 400}}>
                            {benefitsCost[2]}
                            <sup>2</sup>
                        </span>
                    </BenefitsBlockCostWhiteLine>
                    <BenefitsBlockCostDarkLine>
                        <span>Под ключ</span>
                        <span style={{fontWeight: 400}}>
                            {benefitsCost[3]}
                            <sup>2</sup>
                        </span>
                    </BenefitsBlockCostDarkLine>
                    <Button btnType={'MakeOrder'}>
                        Оформить заказ
                    </Button>
                </div>
            </BenefitsBlockDiv>

            {/* Worker block */}
            <WorkerBlockDiv>
                <div>
                    <span>
                        <WorkerBlockHeading>
                            Не можете выбрать?
                        </WorkerBlockHeading>
                        <WorkerBlockHeading>
                            Мы вам подскажем!
                        </WorkerBlockHeading>
                        <WorkerBlockParapgraphDiv>
                            <p> Мы успешно работаем в этой сфере по сей день, </p>
                            <p> благодаря наличию надежно устоявшегося принципа – </p>
                            <p> производить тщательный отбор специалистов на любую </p>
                            <p> должность в компании. </p>
                        </WorkerBlockParapgraphDiv>
                    </span>
                    <Button
                        btnType={'WorkerBlockButton'}
                    >
                        Написать нам
                    </Button>
                </div>
            </WorkerBlockDiv>

            {/* Where Are Installed block */}
            <WhereAreInstalledDiv>
                <div>
                    <WhereAreInstalledHeading>
                        Куда устанавливаются мягкие окна
                    </WhereAreInstalledHeading>
                    <div style={{display: 'flex'}}>
                        <InstalledLineDiv>
                            <InstalledActiveLineDiv
                                numOfActive={numOfActive}
                            />
                        </InstalledLineDiv>
                        <WhereAreInstalledFlex>
                            <InstalledColumnFlex>
                                <WhereAreInstalledBtn
                                    active={numOfActive}
                                    setActive={setNumActive}
                                    btnNum={1}
                                >
                                    Для беседок
                                </WhereAreInstalledBtn>
                                <WhereAreInstalledUnderBtnDiv>
                                    <WhereAreInstalledTextMobile
                                        numOfActive={numOfActive}
                                        textNum={1}
                                    >
                                        <BackgroundImgDiv
                                            active={numOfActive}
                                            mobile={true}
                                        />
                                    </WhereAreInstalledTextMobile>
                                </WhereAreInstalledUnderBtnDiv>
                                <WhereAreInstalledBtn
                                    active={numOfActive}
                                    setActive={setNumActive}
                                    btnNum={2}
                                >
                                    Для террас
                                </WhereAreInstalledBtn>
                                <WhereAreInstalledUnderBtnDiv>
                                    <WhereAreInstalledTextMobile
                                        numOfActive={numOfActive}
                                        textNum={2}
                                    >
                                        <BackgroundImgDiv
                                            active={numOfActive}
                                            mobile={true}
                                        />
                                    </WhereAreInstalledTextMobile>
                                </WhereAreInstalledUnderBtnDiv>
                                <WhereAreInstalledBtn
                                    active={numOfActive}
                                    setActive={setNumActive}
                                    btnNum={3}
                                >
                                    Для веранд
                                </WhereAreInstalledBtn>
                                <WhereAreInstalledUnderBtnDiv>
                                    <WhereAreInstalledTextMobile
                                        numOfActive={numOfActive}
                                        textNum={3}
                                    >
                                        <BackgroundImgDiv
                                            active={numOfActive}
                                            mobile={true}
                                        />
                                    </WhereAreInstalledTextMobile>
                                </WhereAreInstalledUnderBtnDiv>
                                <WhereAreInstalledBtn
                                    active={numOfActive}
                                    setActive={setNumActive}
                                    btnNum={4}
                                >
                                    Для кафе
                                </WhereAreInstalledBtn>
                                <WhereAreInstalledUnderBtnDiv>
                                    <WhereAreInstalledTextMobile
                                        numOfActive={numOfActive}
                                        textNum={4}
                                    >
                                        <BackgroundImgDiv
                                            active={numOfActive}
                                            mobile={true}
                                        />
                                    </WhereAreInstalledTextMobile>
                                </WhereAreInstalledUnderBtnDiv>
                                <WhereAreInstalledBtn
                                    active={numOfActive}
                                    setActive={setNumActive}
                                    btnNum={5}
                                >
                                    Для навеса
                                </WhereAreInstalledBtn>
                                <WhereAreInstalledUnderBtnDiv>
                                    <WhereAreInstalledTextMobile
                                        numOfActive={numOfActive}
                                        textNum={5}
                                    >
                                        <BackgroundImgDiv
                                            active={numOfActive}
                                            mobile={true}
                                        />
                                    </WhereAreInstalledTextMobile>
                                </WhereAreInstalledUnderBtnDiv>
                            </InstalledColumnFlex>
                            <div style={{position: 'relative'}}>
                                <BackgroundImgDiv
                                    active={numOfActive}
                                    mobile={false}
                                />
                                <InstalledWhiteBlockTextDiv>
                                        <InstalledWhiteBlockText
                                            active={numOfActive}
                                        />
                                        <Button btnType={'WhereAreInstalled'}>
                                            Подробнее
                                        </Button>
                                </InstalledWhiteBlockTextDiv>
                            </div>
                        </WhereAreInstalledFlex>
                    </div>
                </div>
            </WhereAreInstalledDiv>

            {/* Mounting block */}
            <MountingBlockDiv>
                <div>
                    <img src={MountingImage} alt='' style={{marginBottom: '6rem'}}/>
                    <MountingBlockTextDiv>
                        <MountingBlockHeading>
                            Монтаж мягких окон&nbsp;
                        </MountingBlockHeading>
                        <MountingBlockHeading>
                            от 1150 руб/м2
                        </MountingBlockHeading>
                        <MountingBlockText>
                            <li>Минимальная сумма монтажа 8000 рублей.</li>
                            <li>Стоимость монтажа в кирпичные, бетонные, керамические или бревенчатые поверхности может быть увеличена по согласованию с заказчиком.</li>
                            <li>Обустройство дополнительных конструкций для крепления оплачивается отдельно.</li>
                        </MountingBlockText>
                        <MountingBottomLink to={'/'}>
                            Подробнее
                        </MountingBottomLink>
                    </MountingBlockTextDiv>
                </div>
            </MountingBlockDiv>

            {/* Our Materials block */}
            <OurMaterialBlockDiv>
                <div>
                    <OurMaterialHeading>
                        Какие материалы мы используем
                    </OurMaterialHeading>
                    <OurMaterialFlexDiv>
                        <div style={{marginBottom: '6rem'}}>
                            <img src={MosquitoNet} alt='' />
                            <OurMaterialUnderImgText>Москитная сетка</OurMaterialUnderImgText>
                            <OurMaterialUnderImgLink to={'/'}>
                                Подробнее
                            </OurMaterialUnderImgLink>
                        </div>
                        <div style={{marginBottom: '6rem'}}>
                            <img src={Carabine1} alt='' />
                            <OurMaterialUnderImgText>Карабин</OurMaterialUnderImgText>
                            <OurMaterialUnderImgLink to={'/'}>
                                Подробнее
                            </OurMaterialUnderImgLink>
                        </div>
                        <div style={{marginBottom: '6rem'}}>
                            <img src={Carabine2} alt='' />
                            <OurMaterialUnderImgText>Карабин</OurMaterialUnderImgText>
                            <OurMaterialUnderImgLink to={'/'}>
                                Подробнее
                            </OurMaterialUnderImgLink>
                        </div>
                    </OurMaterialFlexDiv>
                </div>
            </OurMaterialBlockDiv>

            {/* How We Work block */}
            <HowWeWorkBlockDiv>
                <div>
                    <HowWeWorkBlockHeading>
                        Как мы работаем
                    </HowWeWorkBlockHeading>
                    <CirclesFlexDiv>
                        <CircleFlexContainer
                            textNum={1}
                            active={activeCircle}
                        >
                            <HowWeWorkCircle
                                circleNum={1}
                                active={activeCircle}
                                setActive={setActiveCircle}
                            >
                                1
                                <CirclesDashedLine
                                    width={194}
                                    marginRight={-194}
                                    lineNum={1}
                                    active={activeCircle}
                                />
                            </HowWeWorkCircle>
                            Оставляете заявку
                        </CircleFlexContainer>
                        <CircleFlexContainer
                            textNum={2}
                            active={activeCircle}
                        >
                            <HowWeWorkCircle
                                circleNum={2}
                                active={activeCircle}
                                setActive={setActiveCircle}
                            >
                                2
                                <CirclesDashedLine
                                    width={151}
                                    marginRight={-151}
                                    lineNum={2}
                                    active={activeCircle}
                                />
                            </HowWeWorkCircle>
                            Замер объекта
                        </CircleFlexContainer>
                        <CircleFlexContainer
                            textNum={3}
                            active={activeCircle}
                        >
                            <HowWeWorkCircle
                                circleNum={3}
                                active={activeCircle}
                                setActive={setActiveCircle}
                            >
                                3
                                <CirclesDashedLine
                                    width={181}
                                    marginRight={-181}
                                    lineNum={3}
                                    active={activeCircle}
                                />
                            </HowWeWorkCircle>
                            Производим
                        </CircleFlexContainer>
                        <CircleFlexContainer
                            textNum={4}
                            active={activeCircle}
                        >
                            <HowWeWorkCircle
                                circleNum={4}
                                active={activeCircle}
                                setActive={setActiveCircle}
                            >
                                4
                                <CirclesDashedLine
                                    width={161}
                                    marginRight={-161}
                                    lineNum={4}
                                    active={activeCircle}
                                />
                            </HowWeWorkCircle>
                            Доставка и монтаж
                        </CircleFlexContainer>
                        <CircleFlexContainer
                            textNum={5}
                            active={activeCircle}
                        >
                            <HowWeWorkCircle
                                circleNum={5}
                                active={activeCircle}
                                setActive={setActiveCircle}
                            >
                                5
                            </HowWeWorkCircle>
                            Результат
                        </CircleFlexContainer>
                    </CirclesFlexDiv>
                    <HowWeWorkBottomFlexDiv>
                        <HowWeWorkTextDiv>
                            <ArrowLeft
                                onClick={() => {moveBack(activeCircle, setActiveCircle)}}
                            />
                            <div>
                                <HowWeWorkTextHeading>
                                    {HowWeWorkHeading}
                                </HowWeWorkTextHeading>
                                <HowWeWorkTextParagraph>
                                    {HowWeWorkText}
                                </HowWeWorkTextParagraph>
                            </div>
                        </HowWeWorkTextDiv>
                        <HowWeWorkBottomImage
                            active={activeCircle}
                        >
                            <ArrowRight
                                onClick={() => {moveForward(activeCircle, setActiveCircle)}}
                            />
                        </HowWeWorkBottomImage>
                        <HowWeWorkBackgroundNum
                            activeNum={activeCircle}
                        />
                    </HowWeWorkBottomFlexDiv>
                    <HowWeWorkBottomDotsFlexDiv>
                        {
                            howWeWorkTextArr.map((object: Object, index: number) => {
                                return (
                                    <HowWeWorkBottomDots
                                        currentWork={activeCircle}
                                        currentDot={index + 1}
                                        key={index}
                                        onClick={() => {
                                            setActiveCircle(index + 1)
                                        }}
                                    />
                                )
                            })
                        }
                    </HowWeWorkBottomDotsFlexDiv>
                    <Button btnType={'MakeOrder'}>
                        Оформить заказ
                    </Button>
                </div>
            </HowWeWorkBlockDiv>

            {/* Our works block */}
            <OurWorkBlockDiv>
                <div>
                    <OurWorkHeading>
                        Наши работы
                    </OurWorkHeading>
                    <OurWorkTextFlexDiv>
                        <OurWorkBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={1}
                        >
                            Все
                        </OurWorkBtn>
                        <OurWorkBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={2}
                        >
                            Беседки
                        </OurWorkBtn>
                        <OurWorkBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={3}
                        >
                            Террасы
                        </OurWorkBtn>
                        <OurWorkBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={4}
                        >
                            Веранды
                        </OurWorkBtn>
                        <OurWorkBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={5}
                        >
                            Кафе
                        </OurWorkBtn>
                    </OurWorkTextFlexDiv>
                    <OurWorkMobileBtnAll>
                        <OurWorkMobileBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={1}
                        >
                            Все
                        </OurWorkMobileBtn>
                        <OurWorkMobileBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={2}
                        >
                            Беседки
                        </OurWorkMobileBtn>
                        <OurWorkMobileBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={3}
                        >
                            Террасы
                        </OurWorkMobileBtn>
                        <OurWorkMobileBtn
                            active={ourWorkArr[0]}
                            setActive={ourWorkArr[1]}
                            btnNum={4}
                        >
                            Веранды
                        </OurWorkMobileBtn>
                    </OurWorkMobileBtnAll>
                    <OurWorkBottomFlexDiv>
                        <OurWorkArrowLeft
                            onClick={() => {ourWorkFunc[0](ourWorkArr[0], ourWorkArr[1])}}
                        />
                        { articles[0] }
                        { articles[1] }
                        { articles[2] }
                        <OurWorkArrowRight
                            onClick={() => {ourWorkFunc[1](ourWorkArr[0], ourWorkArr[1])}}
                        />
                    </OurWorkBottomFlexDiv>
                </div>
            </OurWorkBlockDiv>

            {/* Reviews block */}
            <ReviewsBlockDiv>
                <div>
                    <ReviewsBlockHeading>
                        Отзывы
                    </ReviewsBlockHeading>
                    <ReviewsBottomFlexDiv>
                        <ReviewsArrowLeft
                            onClick={reviewsCurrentArr[2]}
                        />
                            {
                                reviewsCurrentArr[1] === reviewsCurrentArr[0].length - 1
                                ? <>
                                    <Review
                                        name={reviewsCurrentArr[0][reviewsCurrentArr[1]].name}
                                        text={reviewsCurrentArr[0][reviewsCurrentArr[1]].review}
                                    />
                                </>
                                : reviewsCurrentArr[0][0] !== undefined && reviewsCurrentArr[1] !== reviewsCurrentArr[0].length - 1
                                ? <>
                                    <Review
                                        name={reviewsCurrentArr[0][reviewsCurrentArr[1]].name}
                                        text={reviewsCurrentArr[0][reviewsCurrentArr[1]].review}
                                    />
                                    <Review
                                        name={reviewsCurrentArr[0][reviewsCurrentArr[1] + 1].name}
                                        text={reviewsCurrentArr[0][reviewsCurrentArr[1] + 1].review}
                                        second={true}
                                    />
                                </>
                                : null
                            }
                        <ReviewsArrowRight
                            onClick={reviewsCurrentArr[3]}
                        />
                    </ReviewsBottomFlexDiv>
                    <ReviewsDotsFlexDiv>
                            {
                                reviewsCurrentArr[0].map((object: Object, index: number) => {
                                    return (
                                        <ReviewsBottomDots
                                            reviewsCurrent={reviewsCurrentArr[1]}
                                            currentDot={index}
                                            key={index}
                                            onClick={() => {
                                                reviewsCurrentArr[4](index)
                                            }}
                                        />
                                    )
                                })
                            }
                    </ReviewsDotsFlexDiv>
                    <ReviewBlockBottomTextFlexDiv>
                        <ReviewsBottomTextLeftDiv>
                            <ReviewBlockBottomText>
                                Мягкие окна или как еще их называют Гибкие окна а также Жидкие окна, производятся из поливинилхлоридной пленки,
                                совмещенной при помощи термосварки с тентовой ПВХ окантовкой, которая обладает плотной структурой и отличными техническими характеристиками. 
                            </ReviewBlockBottomText>
                            <ReviewBlockBottomText>
                                Они прекрасно заменяют остекление, для устройства прозрачного ограждения различных помещений: веранды, мансарды, беседки, террасы.
                            </ReviewBlockBottomText>
                            <ReviewBlockBottomText>
                                Жидкие окна можно использовать круглый год. Благодаря Мягким окнам, создаются комфортные условия в беседке, в летнее время,
                                когда идет дождь или дует ветер. А так же пленка поможет защитить конструкцию от снега в зимнее время.
                            </ReviewBlockBottomText>
                            <ReviewBlockBottomText>
                                Мы изготавливаем и устанавливаем мягкие окна (ПВХ шторы) любых размеров, учитывая все пожелания Заказчика относительно цветовых оттенков
                                материала, их комбинирования и способа крепления.
                            </ReviewBlockBottomText>
                        </ReviewsBottomTextLeftDiv>
                        <ReviewsBottomTextRightDiv>
                            <ReviewBlockBottomText>
                                Мягкие окна (ПВХ шторы) — это современный и практичный способ защиты беседок, веранд, летних террас, открытых павильонов от ненастной погоды,
                                уличной пыли и назойливых насекомых.
                            </ReviewBlockBottomText>
                            <ReviewBlockBottomText>
                                Преимущества мягких окон:
                            </ReviewBlockBottomText>
                            <WrappedReviewBottomTextUl>
                                <li>светопропускаемость 90%;</li>
                                <li>обладают высокой прочностью на разрыв и растяжение;</li>
                                <li>долговечность (при правильной эксплуатации);</li>
                                <li>не боятся сильного мороза и жары;</li>
                                <li>не гниют, устойчивы к образованию плесени и грибка;</li>
                                <li>лучшая альтернатива остеклению по оптимальной цене;</li>
                                <li>полностью безопасны для детей;</li>
                                <li>легко и быстро монтировать и демонтировать в случае необходимости.</li>
                            </WrappedReviewBottomTextUl>
                            <ReviewBlockBottomText>
                                Работаем «ПОД КЛЮЧ» – от замеров до установки, быстро и качественно. Замер, консультация бесплатно!
                            </ReviewBlockBottomText>
                        </ReviewsBottomTextRightDiv>
                    </ReviewBlockBottomTextFlexDiv>
                </div>
            </ReviewsBlockDiv>

            {/* Bottom form block */}
            <FormBlockDiv>
                <div>
                    <FormBlockLeftDiv>
                        <FormBlockHeading>
                            Обсудим проект?
                        </FormBlockHeading>
                        <FormBlockParagraph>
                            Опишите Вашу задачу и отправьте нам заявку. Мы просчитаем бюджет, подберем инструменты и составим план работ по Вашему
                            проекту и свяжемся с Вами в ближайшее время.
                        </FormBlockParagraph>
                    </FormBlockLeftDiv>
                    <WrappedForm action='/' onSubmit={postFormData} method='post'>
                        <WrappedLabel htmlFor='name'>Имя</WrappedLabel>
                        <WrappedInput ref={refsArr[0]} id='name' type='text'/>
                        <WrappedLabel htmlFor='email'>Электронная почта</WrappedLabel>
                        <WrappedInput ref={refsArr[1]} id='email' type='email'/>
                        <WrappedLabel htmlFor='telephone'>Номер телефона</WrappedLabel>
                        <WrappedInput ref={refsArr[2]} id='telephone' type='tel'/>
                        <WrappedLabel htmlFor='aboutProject'>Пару слов о Вашем проекте</WrappedLabel>
                        <WrappedInput ref={refsArr[3]} id='aboutProject' type='text'/>
                        <input ref={refsArr[4]} id='checkbox' type='checkbox'/>
                        <WrappedCheckboxLabel htmlFor='checkbox'>
                            Я согласен(на) на обработку персональных данных
                        </WrappedCheckboxLabel>
                        <Button
                            btnType={'BottomForm'}
                        >
                            Отправить заявку
                        </Button>
                    </WrappedForm>
                </div>
            </FormBlockDiv>
        </>
    )
}

export default withHomePage(HomePage)