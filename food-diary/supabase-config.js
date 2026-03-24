// Supabase 配置
const SUPABASE_URL = 'https://nblhviznjreijctriuuv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibGh2aXpuanJlaWpjdHJpdXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMzQ0MjAsImV4cCI6MjAzNjc5MDQyMH0.sb_publishable_T46z__3N2heiI2xp90hPcg_eEFF_QCn';

// 初始化 Supabase 客户端
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
