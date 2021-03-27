import React from 'react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

function index({ priceId }: SubscribeButtonProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}

export default index
