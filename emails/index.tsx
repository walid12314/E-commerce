import { render } from "@react-email/render";
import PurchaseReceiptEmail from "./purchase-receipt";
import AskReviewOrderItemsEmail from "./ask-review-order-items";
import { IOrder } from "@/lib/db/models/order.model";
import { SENDER_EMAIL, SENDER_NAME } from "@/lib/constants";
import { transporter } from "@/lib/email/mailer";

export const sendPurchaseReceipt = async ({ order }: { order: IOrder }) => {
  const html = await render(<PurchaseReceiptEmail order={order} />);

  await transporter.sendMail({
    from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
    to: (order.user as { email: string }).email,
    subject: "Order Confirmation",
    html,
  });
};

export const sendAskReviewOrderItems = async ({ order }: { order: IOrder }) => {
  const html = await render(<AskReviewOrderItemsEmail order={order} />);

  await transporter.sendMail({
    from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
    to: (order.user as { email: string }).email,
    subject: "Review your order items",
    html,
  });
};
