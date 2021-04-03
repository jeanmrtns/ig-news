import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscription() {
    if (!session) {
      signIn('github')
      return
    }

    if(session.activeSubscription) {
     router.push('/posts')
      return 
    }

    try {
      const response = await api.post('/subscribe')
      console.log(response)
      const { sessionId } = response.data
      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button className={styles.subscribeButton} onClick={handleSubscription}>
      Subscribe now
    </button>
  )
}

export default SubscribeButton
