import type { Session, SupabaseClient, User } from '@supabase/supabase-js'

declare global {
  interface Cart {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity?: number;
  }
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient
      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
      session: Session | null
      user: User | null
    }
    interface PageData {
      session: Session | null
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export { Cart }