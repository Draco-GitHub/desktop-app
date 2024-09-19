// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod calendar;

fn main() {



    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            calendar::get_current_datetime,
            calendar::save_events,
            calendar::load_events
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
