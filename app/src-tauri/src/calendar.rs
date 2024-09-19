
use chrono::prelude::*;
use serde::{Serialize, Deserialize};
use std::fs::{self, File};
use std::io::{Read, Write};

#[derive(Serialize, Deserialize)]
pub(crate) struct Event {
    time_start: String,
    time_end: String,
}

#[tauri::command]
pub fn save_events(events: Vec<Event>) -> Result<(), String> {
    let serialized = serde_json::to_string(&events).map_err(|e| e.to_string())?;
    fs::write("events.json", serialized).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
pub fn load_events() -> Result<Vec<Event>, String> {
    let mut file = File::open("events.json").map_err(|e| e.to_string())?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).map_err(|e| e.to_string())?;
    let events: Vec<Event> = serde_json::from_str(&contents).map_err(|e| e.to_string())?;
    Ok(events)
}

#[tauri::command]
pub fn get_current_datetime() -> String {
    let current_time = Local::now();
    current_time.to_rfc3339()
}