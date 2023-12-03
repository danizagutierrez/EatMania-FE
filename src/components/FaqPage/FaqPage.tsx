import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer';
import Header from '../Header';
import { useState } from 'react';

const FaqPage = () => {
    const [faqs] = useState([
        {
            question: 'What is EatMania all about?',
            answer: "EatMania is a platform that enables users to compare and rate individual food items rather than entire restaurants. We provide a detailed breakdown of various food items, allowing users to make informed choices based on their preferences."
        },
        {
            question: 'How does EatMania work?',
            answer: "Users can browse through our database of food items and view detailed information about each one, including user ratings and reviews. They can also contribute by rating and reviewing their favorite (or not-so-favorite) dishes."
        },
        {
            question:
                'Can I contribute my own ratings and reviews?',
            answer: 'Absolutely! We encourage users to share their opinions on food items. Simply create an account, find the dish you want to review, and share your thoughts along with a rating.'
        },
        {
            question: 'Are user ratings and reviews verified?',
            answer: "While we do our best to ensure the authenticity of reviews, we rely on our community to report any suspicious content. We have moderation processes in place to maintain the quality and integrity of user-contributed content."
        },
        {
            question: 'Do you have nutritional information for food items?',
            answer: "We aim to include nutritional information whenever possible. However, it's important to note that the availability of nutritional details depends on the data provided by restaurants and other sources."
        }
    ]);

    return (
        <div>
            <Header />
            <section className="proper-min-height mt-4 mb-4">
                <h1 className="text-center mb-4">Faq</h1>
                <Accordion className="pe-5 ps-5" defaultActiveKey="">
                    {faqs.map((faq: any, index: number) => (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>
                                <span dangerouslySetInnerHTML={{ __html: faq.answer }}></span>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </section>
            <Footer />
        </div>
    );
};

export default FaqPage;
