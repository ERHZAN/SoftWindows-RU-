import { WrappedTopBlockDiv, TopBlockLinks, WrappedSpanTopBlock, TopBlockHeading, SoftWindowsCostBlockDiv,
    SoftWindowsCostBlockHeading, SoftWindowsBlockChoice, SoftWindowsBlockWhiteLine, SoftWindowsBlockDarkLine,
    OurWorksBlockDiv, OurWorksBlockHeading, OurWorksBlockFlexDiv, OurWorksBlockArrowLeft, OurWorksBlockArrowRight,
    OurWorksBottomImgDiv, OurWorksBottomImgText, OurWorksBottomBackgroundImg, ReviewsBlockDiv, ReviewsBlockHeading,
    ReviewsBottomFlexDiv, ReviewsArrowLeft, ReviewsArrowRight, ReviewsDotsFlexDiv, SoftWindowsForAlcovesBlockDiv,
    SoftWindowsForAlcovesLeftBlock, SoftWindowsForAlcovesRightBlock, SoftWindowsForAlcovesText, SoftWindowsBlockHeading,
    SoftWindowsBlockFlex, SoftWindowsForAlcovesWrappedUl, BottomFormDiv, FormBlockLeftDiv, FormBlockHeading,
    FormBlockParagraph, WrappedForm, WrappedLabel, WrappedInput, WrappedCheckboxLabel, } from '../WindowsForAlcoves/WindowsForAlcovesStyle'
import WindowsForAlcovesTopLink from '../../Components/WindowsForAlcovesTopLink/WindowsForAlcovesTopLink'
import withWindowsForAlcoves from '../../HOC/withWindowsForAlcoves/withWindowsForAlcoves'
import Button from '../../Components/Button/Button'
import CostChoiceBtn from '../../Components/CostChoiceBtn/CostChoiceBtn'
import Review from '../../Components/Reviews/Review'
import ReviewsBottomDots from '../../Components/Reviews/ReviewsBottomDots'
import BeneftisBlockCostMobile from '../../Components/BenefitsBlockCostMobile/BenefitsBlockCostMobile'
import OurWorkMobileBtnAll from '../../Components/OurWorkComponents/OurWorkMobileBtnAll'
import OurWorkMobileBtn from '../../Components/OurWorkComponents/OurWorkMobileBtn'

const WindowsForAlcoves: React.FC<{
    SoftWindowsCostActiveArr: Array<number | any>,
    SoftWindowsCost: Array<string>,
    ourWorkArr: Array<number | any>,
    ourWorkFunc: Array<number | any>,
    articles: Array<React.ReactNode>,
    reviewsCurrentArr: Array<Array<Object> | number | any>,
    refsArr: Array<any>,
    postFormData: any,
}> = ({SoftWindowsCostActiveArr, SoftWindowsCost, ourWorkArr, ourWorkFunc, articles, reviewsCurrentArr,
    refsArr, postFormData}) => {
    return (
        <>
            {/* Top block */}
            <WrappedTopBlockDiv>
                <div>
                    <TopBlockLinks>
                        <WindowsForAlcovesTopLink
                            link={'/'}
                            current={false}
                        >
                            Главная
                        </WindowsForAlcovesTopLink>
                        <WrappedSpanTopBlock>
                            /
                        </WrappedSpanTopBlock>
                        <WindowsForAlcovesTopLink
                            link={'/'}
                            current={false}
                        >
                            Мягкие окна
                        </WindowsForAlcovesTopLink>
                        <WrappedSpanTopBlock>
                            /
                        </WrappedSpanTopBlock>
                        <WindowsForAlcovesTopLink
                            link={'/for-alcoves'}
                            current={true}
                        >
                            Для беседок
                        </WindowsForAlcovesTopLink>
                    </TopBlockLinks>
                    <TopBlockHeading>
                        Мягкие окна для беседок
                        <p>Мы предлагаем  заказать изготовление мягких окон</p>
                        <p>для беседок по чертежам, согласно предоставленным размерам,</p>
                        <p>так же осуществим монтаж конструкций.</p>
                    </TopBlockHeading>
                    <Button
                        btnType={'HomeTop'}
                    >
                        Подробнее
                    </Button>
                </div>
            </WrappedTopBlockDiv>

            {/* SoftWindowsCost block */}
            <SoftWindowsCostBlockDiv>
                <div>
                    <SoftWindowsCostBlockHeading>
                        Стоимость мягких окон для беседок
                    </SoftWindowsCostBlockHeading>
                    <div>
                        <SoftWindowsBlockChoice>
                            <CostChoiceBtn
                                active={SoftWindowsCostActiveArr[0]}
                                setActive={SoftWindowsCostActiveArr[1]}
                                btnNum={1}
                            >
                                <p><span>Мягкие окна более 50 м<sup>2</sup></span><span/></p>
                                <BeneftisBlockCostMobile
                                    benefitsCost={SoftWindowsCost}
                                    benefitsTextNum={1}
                                    active={SoftWindowsCostActiveArr[0]}
                                />
                            </CostChoiceBtn>
                            <CostChoiceBtn
                                active={SoftWindowsCostActiveArr[0]}
                                setActive={SoftWindowsCostActiveArr[1]}
                                btnNum={2}
                            >
                                <p><span>Мягкие окна от 15 м<sup>2</sup> до 50 м<sup>2</sup></span><span/></p>
                                <BeneftisBlockCostMobile
                                    benefitsCost={SoftWindowsCost}
                                    benefitsTextNum={2}
                                    active={SoftWindowsCostActiveArr[0]}
                                />
                            </CostChoiceBtn>
                            <CostChoiceBtn
                                active={SoftWindowsCostActiveArr[0]}
                                setActive={SoftWindowsCostActiveArr[1]}
                                btnNum={3}
                            >
                                <p><span>Мягкие окна до 15 м<sup>2</sup></span><span/></p>
                                <BeneftisBlockCostMobile
                                    benefitsCost={SoftWindowsCost}
                                    benefitsTextNum={3}
                                    active={SoftWindowsCostActiveArr[0]}
                                />
                            </CostChoiceBtn>
                        </SoftWindowsBlockChoice>
                        <SoftWindowsBlockWhiteLine>
                            <span>Стандарт</span>
                            <span style={{fontWeight: 400}}>
                                {SoftWindowsCost[0]}
                                <sup>2</sup>
                            </span>
                        </SoftWindowsBlockWhiteLine>
                        <SoftWindowsBlockDarkLine>
                            <span>Премимум</span>
                            <span style={{fontWeight: 400}}>
                                {SoftWindowsCost[1]}
                                <sup>2</sup>
                            </span>
                        </SoftWindowsBlockDarkLine>
                        <SoftWindowsBlockWhiteLine>
                            <span>Люкс</span>
                            <span style={{fontWeight: 400}}>
                                {SoftWindowsCost[2]}
                                <sup>2</sup>
                            </span>
                        </SoftWindowsBlockWhiteLine>
                        <SoftWindowsBlockDarkLine>
                            <span>Под ключ</span>
                            <span style={{fontWeight: 400}}>
                                {SoftWindowsCost[3]}
                                <sup>2</sup>
                            </span>
                        </SoftWindowsBlockDarkLine>
                        <Button btnType={'MakeOrder'}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </SoftWindowsCostBlockDiv>

            {/* OurWorks block */}
            <OurWorksBlockDiv>
                <div>
                    <OurWorksBlockHeading>
                        Наши работы
                    </OurWorksBlockHeading>
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
                    <OurWorksBlockFlexDiv>
                        <OurWorksBlockArrowLeft
                            onClick={() => {ourWorkFunc[0](ourWorkArr[0], ourWorkArr[1])}}
                        />
                        { articles[0] }
                        { articles[1] }
                        { articles[2] }
                        <OurWorksBlockArrowRight
                            onClick={() => {ourWorkFunc[1](ourWorkArr[0], ourWorkArr[1])}}
                        />
                    </OurWorksBlockFlexDiv>
                    <div style={{position: 'relative'}}>
                        <OurWorksBottomBackgroundImg />
                        <OurWorksBottomImgDiv>
                                <OurWorksBottomImgText>
                                    Наша компания занимается производством и монтажом мягких окон с 2015 года. За это время нами реализованы десятки проектов по обустройству беседок и террас во многих районах Подмосковья. Предлагаем вам подробнее ознакомиться с нашими выполненными работами. Примеры проектов позволят вам оценить профессионализм наших сотрудников и качество выполненных работ. Помогут определится с выбором материалов для изготовления мягких окон и сопутствующей фурнитуры.
                                </OurWorksBottomImgText>
                                <Button btnType={'HomeTop'}>
                                    Подробнее
                                </Button>
                        </OurWorksBottomImgDiv>
                    </div>
                </div>
            </OurWorksBlockDiv>

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
                </div>
            </ReviewsBlockDiv>

            {/* SoftWindowsForAlcoves block */}
            <SoftWindowsForAlcovesBlockDiv>
                <div>
                    <SoftWindowsBlockHeading>
                        Мягкие окна для беседок
                    </SoftWindowsBlockHeading>
                    <SoftWindowsBlockFlex>
                        <SoftWindowsForAlcovesLeftBlock>
                            <SoftWindowsForAlcovesText>
                            Мягкие окна или как еще их называют Гибкие окна а также Жидкие окна, производятся из поливинилхлоридной пленки, совмещенной при помощи термосварки с тентовой ПВХ окантовкой,  которая обладает плотной структурой и отличными техническими характеристиками. 
                            </SoftWindowsForAlcovesText>
                            <SoftWindowsForAlcovesText>
                                Они прекрасно заменяют остекление, для устройства прозрачного ограждения различных помещений: веранды, мансарды, беседки, террасы.
                            </SoftWindowsForAlcovesText>
                            <SoftWindowsForAlcovesText>
                                Жидкие окна можно использовать круглый год. Благодаря Мягким окнам, создаются комфортные условия
                                в беседке, в летнее время, когда идет дождь или дует ветер. А так же пленка поможет защитить конструкцию от снега в зимнее время.
                            </SoftWindowsForAlcovesText>
                            <SoftWindowsForAlcovesText>
                                Мы изготавливаем и устанавливаем мягкие окна (ПВХ шторы) любых размеров, учитывая все пожелания Заказчика относительно цветовых оттенков материала, их комбинирования и способа крепления.
                            </SoftWindowsForAlcovesText>
                        </SoftWindowsForAlcovesLeftBlock>
                        <SoftWindowsForAlcovesRightBlock>
                            <SoftWindowsForAlcovesText>
                                Мягкие окна (ПВХ шторы) — это современный и практичный способ защиты беседок, веранд, летних террас, открытых павильонов от ненастной погоды, уличной пыли и назойливых насекомых.
                            </SoftWindowsForAlcovesText>
                            <SoftWindowsForAlcovesText>
                                Преимущества мягких окон:
                            </SoftWindowsForAlcovesText>
                            <SoftWindowsForAlcovesWrappedUl>
                                <li>светопропускаемость 90%;</li>
                                <li>обладают высокой прочностью на разрыв и растяжение;</li>
                                <li>долговечность (при правильной эксплуатации);</li>
                                <li>не боятся сильного мороза и жары;</li>
                                <li>не гниют, устойчивы к образованию плесени и грибка;</li>
                                <li>лучшая альтернатива остеклению по оптимальной цене;</li>
                                <li>полностью безопасны для детей;</li>
                                <li>легко и быстро монтировать и демонтировать в случае необходимости.</li>
                            </SoftWindowsForAlcovesWrappedUl>
                            <SoftWindowsForAlcovesText>
                                Работаем «ПОД КЛЮЧ» – от замеров до установки, быстро и качественно. Замер, консультация бесплатно!
                            </SoftWindowsForAlcovesText>
                        </SoftWindowsForAlcovesRightBlock>
                    </SoftWindowsBlockFlex>
                </div>
            </SoftWindowsForAlcovesBlockDiv>

            {/* Bottom form block */}
            <BottomFormDiv>
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
            </BottomFormDiv>
        </>
    )
}

export default withWindowsForAlcoves(WindowsForAlcoves)