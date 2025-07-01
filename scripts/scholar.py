import json
from scholarly import scholarly

def get_author_data(author_id):
    # Search author by ID
    author = scholarly.search_author_id(author_id)
    # Fill in full profile, including publications
    author = scholarly.fill(author, sections=["basics", "indices", "publications"])

    # Fill each publication with complete info
    full_pubs = []
    for pub in author.get("publications", []):
        try:
            full_pub = scholarly.fill(pub)
            full_pubs.append(full_pub)
        except Exception as e:
            print(f"Error loading publication: {e}")

    # Replace publications with full versions
    author["publications"] = full_pubs
    return author

def save_author_to_json(author_id, output_file="scripts/author_data.json"):
    data = get_author_data(author_id)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Saved data to {output_file}")

# Example usage
if __name__ == "__main__":
    AUTHOR_ID = "ujiTSqoAAAAJ"  # Replace with your target author ID
    save_author_to_json(AUTHOR_ID)
