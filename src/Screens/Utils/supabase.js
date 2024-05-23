

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywnfdhnmbepjpjsubueh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bmZkaG5tYmVwanBqc3VidWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0OTk3NzUsImV4cCI6MjAzMTA3NTc3NX0.HkQfouHbvPIYTT_kp44uP1HmcscQ4ICRtvMdP5jf11k"
const supabase = createClient(supabaseUrl, supabaseKey)