-- Alter whatsapp_config table to add meta_app_secret
ALTER TABLE whatsapp_config ADD COLUMN IF NOT EXISTS meta_app_secret TEXT;
