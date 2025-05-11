import React from "react";

const AuthTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-zinc-700 rounded-md overflow-hidden">
      {["Login", "Cadastro"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-1/2 py-3 font-bold transition-colors duration-200 ${
            activeTab === tab
              ? `bg-white border-b-4 rounded-t-md ${
                  tab === "Login"
                    ? "text-emerald-900 border-emerald-400"
                    : "text-purple-900 border-purple-400"
                }`
              : "text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default AuthTabs;
