import { List } from 'antd';
import s from './advantages.module.scss';

type AdvantageItem = {
    id: number;
    text: string;
};

const advantages: AdvantageItem[] = [
    {
        id: 1,
        text: 'Stay informed: instantly discover a wide range of events happening in your area, from concerts and festivals to workshops and community gatherings.',
    },
    {
        id: 2,
        text: 'Personalized recommendations: our smart recommendation system learns your preferences over time, ensuring that you receive event suggestions tailored specifically to your interests.',
    },
    {
        id: 3,
        text: 'Plan ahead: easily plan your week ahead by browsing upcoming events, saving your favorites, and setting reminders so you never double-book or forget an event again.',
    },
    {
        id: 4,
        text: 'Connect with community: explore events that align with your passions and hobbies, and connect with like-minded individuals in your area to share memorable experiences together.',
    },
    {
        id: 5,
        text: 'Simple and intuitive: our user-friendly interface makes it a breeze to navigate through events, purchase tickets, and RSVP, all in one convenient location.',
    },
];

const Advantages = () => {
    return (
        <List
            className={s.list}
            dataSource={advantages}
            renderItem={(item) => (
                <List.Item key={item.id}>{item.text}</List.Item>
            )}
        />
    );
};

export default Advantages;
