import React from 'react';
import decor from '../assets/Decoration.svg'
import sign from '../assets/Signature.svg'
import people from '../assets/People.jpg'

function AboutUs() {

    return (
        <section className={'about'} id={'about'}>
            <div className={'about__info'}>
                <h2 className={'about__title'}>O nas</h2>
                <img className={'decoration'} src={decor} alt={'decoration'}/>
                <p className={'about__text'}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className={'about__sign'}>
                    <img className={'about__signature'} src={sign} alt={'signature'}/>
                </div>
            </div>
            <img className={'about__picture'} src={people} alt={'people'}/>
        </section>
    );
}


export default AboutUs;
