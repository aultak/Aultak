-- Run this in your Supabase SQL Editor
create table products (
  id serial primary key,
  name text not null,
  category text,
  price numeric,
  image_url text,
  tags text[], -- Array for hashtags
  meta_title text,
  meta_desc text,
  created_at timestamp with time zone default now()
);

create table orders (
  id serial primary key,
  customer_email text,
  items jsonb,
  payment_method text,
  total numeric,
  status text default 'confirmed',
  created_at timestamp with time zone default now()
);