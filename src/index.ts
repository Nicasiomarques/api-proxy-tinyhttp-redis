import { initRedis } from '@/infra'
import { PORT } from '@/constants'
import App from '@/main'

initRedis().then(() => {
  App.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT} 🚀`)
  })
})
