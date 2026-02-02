import "server-only"

import Stripe from "stripe"

// Fallback to prevent build crash if env var is missing
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder")
