import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export function useSEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Update description and keywords
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
  }, [title, description, keywords]);
}
