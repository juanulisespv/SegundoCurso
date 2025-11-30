#!/usr/bin/env python3
"""
Script para convertir archivos JSON a datos JavaScript embebidos
para permitir despliegue en GitHub Pages
"""

import json
import os

def convert_jsons_to_js():
    # Use current working directory or relative path
    base_path = os.getcwd()
    
    # Paths to JSON directories
    json_paths = {
        'hci': os.path.join(base_path, "contenidos/HCItests/hcijson"),
        'programacion': os.path.join(base_path, "contenidos/programaciontests/programacionjson")
    }
    
    # Collect all data
    all_data = {
        'hci': {},
        'programacion': {}
    }
    
    for subject, json_dir in json_paths.items():
        if not os.path.exists(json_dir):
            print(f"Directory not found: {json_dir}")
            continue
            
        print(f"Processing {subject} JSONs...")
        
        # Find all JSON files
        json_files = [f for f in os.listdir(json_dir) if f.endswith('.json')]
        json_files.sort(key=lambda x: int(x.split('.')[0]))  # Sort numerically
        
        for json_file in json_files:
            theme_id = json_file.split('.')[0]
            json_path = os.path.join(json_dir, json_file)
            
            try:
                with open(json_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    all_data[subject][theme_id] = data
                    print(f"  Added {subject} tema {theme_id}: {len(data.get('questions', []))} questions")
            except Exception as e:
                print(f"  Error processing {json_file}: {e}")
    
    # Generate JavaScript file
    js_content = f"""// Quiz Data - Auto-generated from JSON files
// This file contains all quiz data embedded for GitHub Pages deployment

const QUIZ_DATA = {json.dumps(all_data, indent=2, ensure_ascii=False)};

// Export for use in main app
window.QUIZ_DATA = QUIZ_DATA;
"""
    
    # Write to quiz-spa directory
    output_path = os.path.join(base_path, "quiz-spa/quiz-data.js")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n✅ Generated: {output_path}")
    
    # Print summary
    total_themes = sum(len(themes) for themes in all_data.values())
    total_questions = sum(
        len(data.get('questions', []))
        for themes in all_data.values()
        for data in themes.values()
    )
    
    print(f"\n📊 Summary:")
    print(f"  - HCI themes: {len(all_data['hci'])}")
    print(f"  - Programación themes: {len(all_data['programacion'])}")
    print(f"  - Total themes: {total_themes}")
    print(f"  - Total questions: {total_questions}")

if __name__ == "__main__":
    convert_jsons_to_js()
