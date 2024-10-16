import * as Switch from '@radix-ui/react-switch';
import styles from './PaymentTypeToggle.module.css';

const PaymentTypeToggle = ({ paymentType, setPaymentType }) => {
    return (
        <div className={styles.paymentSection}>
            <div className={styles.toggleSection}>
                <div
                    className={`${styles.toggleText} ${paymentType && styles.selectedText}`}
                >
                    Monthly
                </div>
                <Switch.Root
                    className={styles.Root}
                    id="airplane-mode"
                    onCheckedChange={() => setPaymentType(!paymentType)}
                >
                    <Switch.Thumb className={styles.Thumb} />
                </Switch.Root>
                <div
                    className={`${styles.toggleText} ${!paymentType && styles.selectedText}`}
                >
                    Yearly
                </div>
            </div>
            <img
                src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"
                alt="promotion"
                className={styles.promotionImage}
            />
        </div>
    );
};

export default PaymentTypeToggle;
