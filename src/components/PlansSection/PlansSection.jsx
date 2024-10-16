import { useState } from 'react';
import PaymentTypeToggle from './PaymentTypeToggle/PaymentTypeToggle';
import styles from './PlansSection.module.css';

const PlansSection = () => {
    const [paymentType, setPaymentType] = useState(true);

    return (
        <section className={styles.plansSection}>
            <div className={styles.header}>
                <h1>Plans & Pricing</h1>
                <PaymentTypeToggle paymentType={paymentType} setPaymentType={setPaymentType} />
            </div>
        </section>
    );
}

export default PlansSection;
