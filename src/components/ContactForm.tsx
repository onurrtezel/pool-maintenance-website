'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const loadingToast = toast.loading('Mesajınız gönderiliyor...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Mesajınız başarıyla gönderildi!', { id: loadingToast })
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Mesaj gönderilirken bir hata oluştu.', { id: loadingToast })
      }
    } catch (error) {
      toast.error('Mesaj gönderilirken bir hata oluştu.', { id: loadingToast })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Ad Soyad
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-gray-900 bg-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-gray-900 bg-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-gray-900 bg-white"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary px-4 py-2 text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Gönder
      </button>
    </form>
  )
} 