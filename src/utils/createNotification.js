import Notification from "@/models/Notification";

/**
 * Create a notification for a user.
 *
 * This helper is intentionally small so it can be reused
 * from payment, contract, messaging, property and lead APIs.
 */
export async function createNotification({
  recipient,
  type,
  title,
  message,
  link = "",
  metadata = {},
}) {
  if (!recipient) {
    throw new Error("Notification recipient is required.");
  }

  if (!type) {
    throw new Error("Notification type is required.");
  }

  if (!title) {
    throw new Error("Notification title is required.");
  }

  if (!message) {
    throw new Error("Notification message is required.");
  }

  const notification = await Notification.create({
    recipient,
    type,
    title,
    message,
    link,
    metadata,
    isRead: false,
  });

  return notification;
}
