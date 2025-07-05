import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yknremebxmbcoujvbmnd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrbnJlbWVieG1iY291anZibW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTY1NjYsImV4cCI6MjA2NzEzMjU2Nn0.2eEjbO9bsfwE_AxoU7SAskIkjMO3kePvjdTGi980AM8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
