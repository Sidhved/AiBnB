import google.generativeai as genai
import re
import json

genai.configure(api_key="AIzaSyD5AajTMhR6PYlK3yvNScZhfytGQBNBv1I")

# Set up the model
generation_config = {
  "temperature": 0.5,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
  "stop_sequences": [
    "~",
  ],
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

system_instruction = "Generate Itinerary using the given inputs strictly in the following format, furnish with optimum arrival and departure details if not provided:\n[\nDay 1:{\nArrival Time Stamp,\nArrival Travel details,\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Details,\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Detail,\nFood and Accommodation Recommendation,\n},\nDay 2:{\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Details,\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Detail,\nFood and Accommodation Recommendation\n}\n{\nDay 3:{\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Details,\nTime Stamp,\nActivity,\nPlace Coordinates,\nTravel Detail,\nFood and Accommodation Recommendation,\nDeparture Time Stamp,\nDeparture Travel Details\n}\n]\n~"

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              system_instruction=system_instruction,
                              safety_settings=safety_settings)


def extract_text(itinerary_text):
    # Extracting the text inside \text{}
    extracted_text = re.findall(r'\\text\{([^}]*)\}', itinerary_text)

    # Dictionary to hold the structured data
    itinerary = {}
    current_day = None

    # Iterate over the extracted text to organize into a JSON structure
    for text in extracted_text:
        if 'Day' in text:
            current_day = text.strip(':')
            itinerary[current_day] = []
        elif current_day:  # Append text to the current day list
            itinerary[current_day].append(text)

    # Convert dictionary to JSON
    return json.dumps(itinerary, indent=4)


def generate_itinerary(destination, days, guests, budget, preferences):
    prompt = [f"{destination} {days} {guests} ${budget} {preferences}"]
    return extract_text(model.generate_content(prompt).text)
